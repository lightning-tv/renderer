import { SharedObject } from './SharedObject.js';
import { stringifyTypeId } from './buffer-struct-utils.js';

interface ThreadXOptions {
  threadId: number;
  threadName: string;
  sharedObjectFactory: (buffer: SharedArrayBuffer) => SharedObject | null;
  // TOOD: Ultimately replace this with a more generic event handler system
  onObjectShared?: (sharedObject: SharedObject) => void;
  onObjectForgotten?: (sharedObject: SharedObject) => void;
  onMessage?: (message: any) => Promise<any>;
}

declare global {
  class DedicatedWorkerGlobalScope {
    DedicatedWorkerGlobalScope: typeof DedicatedWorkerGlobalScope;

    postMessage(message: any, transfer?: Transferable[]): void;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(
      type: K,
      listener: (
        this: WindowEventHandlers,
        ev: WindowEventHandlersEventMap[K],
      ) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject | null,
      options?: boolean | AddEventListenerOptions,
    ): void;
  }

  interface WindowOrWorkerGlobalScope {
    THREADX?: ThreadX;

    DedicatedWorkerGlobalScope?: typeof DedicatedWorkerGlobalScope;
  }
}

/**
 * Created to define a common interface for both Worker parents (`self`) and
 * Worker instances
 */
interface WorkerCommon {
  postMessage(message: any, transfer?: Transferable[]): void;
  addEventListener<K extends keyof WindowEventHandlersEventMap>(
    type: K,
    listener: (
      this: WindowEventHandlers,
      ev: WindowEventHandlersEventMap[K],
    ) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions,
  ): void;
}

interface ThreadXMessage {
  threadXMessageType: string;
}

interface ShareObjectsMessage extends ThreadXMessage {
  threadXMessageType: 'shareObjects';
  buffers: SharedArrayBuffer[];
}

interface ForgetObjectsMessage extends ThreadXMessage {
  threadXMessageType: 'forgetObjects';
  objectIds: number[];
}
interface SharedObjectEmitMessage extends ThreadXMessage {
  threadXMessageType: 'sharedObjectEmit';
  sharedObjectId: number;
  eventName: string;
  data: any;
}

interface ResponseMessage extends ThreadXMessage {
  threadXMessageType: 'response';
  asyncMsgId: number;
  error?: true;
  data: any;
}

function isMessage(
  messageType: 'shareObjects',
  message: any,
): message is ShareObjectsMessage;
function isMessage(
  messageType: 'forgetObjects',
  message: any,
): message is ForgetObjectsMessage;
function isMessage(
  messageType: 'sharedObjectEmit',
  message: any,
): message is SharedObjectEmitMessage;
function isMessage(
  messageType: 'response',
  message: any,
): message is ResponseMessage;
function isMessage(messageType: string, message: any): message is MessageEvent {
  return (
    typeof message === 'object' &&
    message !== null &&
    message.threadXMessageType === messageType
  );
}

function isWebWorker(selfObj: any): selfObj is DedicatedWorkerGlobalScope {
  return typeof selfObj.DedicatedWorkerGlobalScope === 'function';
}

export class ThreadX {
  static init(options: ThreadXOptions) {
    if (self.THREADX) {
      throw new Error('ThreadX already initialized');
    }
    const threadX = new ThreadX(options);
    self.THREADX = threadX;
    return threadX;
  }

  /**
   * Get the ThreadID of the current thread
   *
   * @remarks
   * This is only valid after ThreadX.init() has been called.
   */
  static get threadId(): number {
    if (!self.THREADX) {
      throw new Error('ThreadX not initialized');
    }
    return self.THREADX.threadId;
  }

  /**
   * Get the ThreadName of the current thread
   *
   * @remarks
   * This is only valid after ThreadX.init() has been called.
   */
  static get threadName(): string {
    if (!self.THREADX) {
      throw new Error('ThreadX not initialized');
    }
    return self.THREADX.threadName;
  }

  static get instance(): ThreadX {
    if (!self.THREADX) {
      throw new Error('ThreadX not initialized');
    }
    return self.THREADX;
  }

  readonly threadId: number;
  readonly threadName: string;
  readonly sharedObjectFactory: (
    buffer: SharedArrayBuffer,
  ) => SharedObject | null;
  private readonly onSharedObjectCreated?: (sharedObject: SharedObject) => void;
  private readonly onSharedObjectForgotten?: (
    sharedObject: SharedObject,
  ) => void;
  /**
   * User-defined message handler
   */
  private readonly onUserMessage?: (message: any) => Promise<void>;
  readonly sharedObjects = new Map<number, SharedObject>();
  readonly threads = new Map<string, WorkerCommon>();
  private pendingAsyncMsgs = new Map<
    number,
    {
      resolve: (data: any) => void;
      reject: (data: any) => void;
    }
  >();
  private nextAsyncMsgId = 0;

  /**
   * Suppress emitting events from SharedObjects
   *
   * @remarks
   * This is used to prevent infinite loops when emitting events from a SharedObject
   * that is shared with another worker.
   *
   * We set this to true when we receive a SharedObjectEmitMessage from another worker
   * and set it back to false after we have emitted the event on the SharedObject.
   */
  private suppressSharedObjectEmit = false;

  private constructor(options: ThreadXOptions) {
    this.threadId = options.threadId;
    this.threadName = options.threadName;
    this.sharedObjectFactory = options.sharedObjectFactory;
    this.onSharedObjectCreated = options.onObjectShared;
    this.onSharedObjectForgotten = options.onObjectForgotten;
    this.onUserMessage = options.onMessage;
    const mySelf: unknown = self;
    if (isWebWorker(mySelf)) {
      this.registerThread('parent', mySelf);
    }
  }

  registerThread(name: string, worker: WorkerCommon) {
    this.threads.set(name, worker);
    this.listenForWorkerMessages(worker);
  }

  private listenForWorkerMessages(worker: WorkerCommon) {
    worker.addEventListener('message', (event) => {
      const { data } = event;
      // Process only if message is a ThreadX message
      const asyncMsgId = data.__asyncMsgId;
      this.onMessage(data)
        .then((response) => {
          if (asyncMsgId !== undefined) {
            worker.postMessage({
              threadXMessageType: 'response',
              asyncMsgId: asyncMsgId,
              data: response,
            } satisfies ResponseMessage);
          }
        })
        .catch((error) => {
          if (asyncMsgId !== undefined) {
            worker.postMessage({
              threadXMessageType: 'response',
              asyncMsgId: asyncMsgId,
              error: true,
              data: error,
            } satisfies ResponseMessage);
          }
        });
    });
  }

  /**
   * Share a SharedObject with a worker
   *
   * @param workerName Worker to share with
   * @param sharedObject
   */
  async shareObjects(workerName: string, sharedObjects: SharedObject[]) {
    for (const sharedObject of sharedObjects) {
      if (this.sharedObjects.get(sharedObject.id)) {
        // Currently we only support sharing objects with only a single worker
        // TODO: Support sharing objects with multiple workers?
        //   - Do we really need to do this?
        console.warn(
          `ThreadX.shareObject(): SharedObject ${sharedObject.id} (TypeID: ${
            stringifyTypeId(sharedObject.typeId) || 'null'
          }) is already shared.`,
        );
      } else {
        this.sharedObjects.set(sharedObject.id, sharedObject);
      }
    }
    await this.sendMessageAsync(workerName, {
      threadXMessageType: 'shareObjects',
      buffers: sharedObjects.map((so) => {
        return SharedObject.extractBuffer(so);
      }),
    } satisfies ShareObjectsMessage);
    // TODO: Handle case where worker fails to create shared object on its end
    //  - We could issue you an error event back to the sharer
  }

  /**
   * Tell a worker to forget about a SharedObject
   *
   * @remarks
   * This causes ThreadX running on the worker to eliminate its held reference
   * to the SharedObject. Though it is up to the worker code to actually
   * make sure that no other references to the SharedObject exist so that
   * it can be garbage collected.
   *
   * The worker can implement the onObjectForgotten() callback to be notified
   * when a SharedObject is forgotten.
   *
   * @param workerName
   * @param sharedObject
   */
  async forgetObjects(workerName: string, sharedObjects: SharedObject[]) {
    for (const sharedObject of sharedObjects) {
      if (!this.sharedObjects.has(sharedObject.id)) {
        // Currently we only support sharing objects with only a single worker
        // TODO: Support sharing objects with multiple workers?
        //   - Do we really need to do this?
        console.warn(
          `ThreadX.forgetObject(): SharedObject ${sharedObject.id} (TypeID: ${
            stringifyTypeId(sharedObject.typeId) || 'null'
          }) is not shared.`,
        );
      } else {
        this.sharedObjects.delete(sharedObject.id);
      }
    }
    await this.sendMessageAsync(workerName, {
      threadXMessageType: 'forgetObjects',
      objectIds: sharedObjects.map((so) => so.id),
    } satisfies ForgetObjectsMessage);
  }

  sendMessage(
    workerName: string,
    message: any,
    transfer?: Transferable[] | undefined,
  ): void {
    const worker = this.threads.get(workerName);
    if (!worker) {
      throw new Error(
        `ThreadX.sendMessage(): Worker '${workerName}' not registered.`,
      );
    }
    worker.postMessage(message, transfer);
  }

  async sendMessageAsync(
    workerName: string,
    message: any,
    transfer?: Transferable[] | undefined,
  ): Promise<any> {
    const worker = this.threads.get(workerName);
    if (!worker) {
      throw new Error(
        `ThreadX.execMessage(): Worker '${workerName}' not registered.`,
      );
    }
    const asyncMsgId = this.nextAsyncMsgId++;
    const promise = new Promise((resolve, reject) => {
      this.pendingAsyncMsgs.set(asyncMsgId, {
        resolve,
        reject,
      });
    });
    message.__asyncMsgId = asyncMsgId;
    worker.postMessage(message, transfer);
    return promise;
  }

  private async onMessage(message: any): Promise<any> {
    if (isMessage('shareObjects', message)) {
      message.buffers.forEach((buffer: SharedArrayBuffer) => {
        const sharedObject = this.sharedObjectFactory(buffer);
        if (!sharedObject) {
          throw new Error(
            'ThreadX.onMesasge(): Failed to create shared object.',
          );
        }
        this.sharedObjects.set(sharedObject.id, sharedObject);
        this.onSharedObjectCreated?.(sharedObject);
      });
    } else if (isMessage('forgetObjects', message)) {
      message.objectIds.forEach((id: number) => {
        const sharedObject = this.sharedObjects.get(id);
        if (!sharedObject) {
          // If we can't find the SharedObject then it wasn't shared with this
          // worker. Just ignore the message.
          return;
        }
        this.sharedObjects.delete(id);
        this.onSharedObjectForgotten?.(sharedObject);
      });
    } else if (isMessage('sharedObjectEmit', message)) {
      const sharedObject = this.sharedObjects.get(message.sharedObjectId);
      if (!sharedObject) {
        // If we can't find the SharedObject then it wasn't shared with this
        // worker. Just ignore the message.
        return;
      }
      // Prevent emitting the event back to the worker that sent it.
      this.suppressSharedObjectEmit = true;
      sharedObject.emit(message.eventName, message.data);
      this.suppressSharedObjectEmit = false;
    } else if (isMessage('response', message)) {
      const response = this.pendingAsyncMsgs.get(message.asyncMsgId);
      if (!response) {
        throw new Error(
          `ThreadX.onMessage(): Received response for unknown request (ID: ${message.asyncMsgId})`,
        );
      }
      this.pendingAsyncMsgs.delete(message.asyncMsgId);
      if (message.error) {
        response.reject(message.data);
      } else {
        response.resolve(message.data);
      }
    } else if (this.onUserMessage) {
      return await this.onUserMessage(message);
    }
  }

  /**
   * Emit an event from a SharedObject to all other workers
   *
   * @internalRemarks
   * For internal ThreadX use only.
   *
   * Since we aren't sure what workers are sharing a SharedObject we need to
   * emit the event to all workers. (TODO: Possible optimization?)
   *
   * @param sharedObject
   * @param eventName
   * @param data
   * @returns
   */
  __sharedObjectEmit(sharedObject: SharedObject, eventName: string, data: any) {
    // If we are currently emitting an event from a SharedObject that originated
    // from another worker then we don't want to emit the event again.
    if (this.suppressSharedObjectEmit) {
      return;
    }
    this.threads.forEach((worker) => {
      worker.postMessage({
        threadXMessageType: 'sharedObjectEmit',
        sharedObjectId: sharedObject.id,
        eventName,
        data,
      });
    });
  }
}
