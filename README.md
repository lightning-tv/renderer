# Lightning 3 Renderer (Beta)

**Warning: This is beta software and all of the exposed APIs are subject to
breaking changes**

A powerful 2D scene renderer designed for rendering highly performant user
interfaces on web browsers running on embedded devices using WebGL.

The Renderer is not designed for direct application development but instead
to provide a lightweight API for front-end application frameworks like Bolt and
Solid.

## Setup & Commands

```
# Install renderer dependencies
npm install

# Install example dependencies
cd examples
npm install

# Build Renderer
npm run build

# Build Renderer (watch mode)
npm run watch

# Run unit tests
npm test

# Build API Documentation (builds into ./docs folder)
npm run typedoc

# Launch test examples in dev mode (includes Build Renderer (watch mode))
npm start

# Launch test examples in production mode
# IMPORTANT: To run test examples on embedded devices that use older browser versions
# you MUST run the examples in this mode.
npm run prod
```

## Test Examples

[See README](./examples/README.md)

## Main Space vs Core Space

The Lightning 3 Renderer runs code in two logically seperate environments:
the **Main Space** and the **Core Space**.

Users of the Renderer will write most of their code for the Main Space using
the **Main API**. This is code that will always run on the browser's main thread
and includes initializing the Renderer, creating/modifying/destroying nodes,
controlling animations, etc.

The Core Space is where the actual rendering of each UI frame happens and is
mostly meant to be transparent to users of the Renderer. However, the Core Space
is where all of the code that must be tightly coupled to the rendering process
must be loaded and run. The Core Space is extendible by users by writing
**Core Extensions** via the **Core API**. This allows for users to develop their
own shaders, textures, text renderers, dynamic shader effects, and more. Fonts
used in an application must be loaded in this way too. The Core Space exists
seperately from the Main Space because it is allowed to execute on the page's
main thread OR a Web Worker thread. A **Core Driver** (see below) is used to
bridge the Main Space with the Core Space.

## Core Drivers

The Lightning 3 Renderer is designed to be able to use a single thread or
multiple web worker threads based on the configuration of a **Core Driver**.

A Core Driver essentially acts as a bridge between the Main and Core spaces
defined above.

The Renderer comes with two Core Drivers: the Main Core Driver for single
threaded rendering and the ThreadX Core Driver for multi-threaded rendering.

NOTE: The ThreadX Core Driver is experimental and even when the Renderer
graduates from beta may still not be ready for production use.

### Main Core Driver

The Main Core Driver renders your application on the web page's main thread.

It can be configured into the Renderer like so:

```ts
import { MainRenderDriver, RendererMain } from '@lightningjs/renderer';

const renderer = new RendererMain(
  {
    // App Config
  },
  'app', // App div ID
  new MainRenderDriver(), // Main Render driver
);

// ...
```

### ThreadX Core Driver

The ThreadX Core Driver renders your application on a seperately spawned
Web Worker thread.

It can be configured into the Renderer like so:

```ts
import {
  ThreadXRenderDriver,
  RendererMain,
} from '@lightningjs/renderer';

// The `@lightningjs/vite-plugin-import-chunk-url` Vite plugin is required for this:
import coreWorkerUrl from './common/CoreWorker.js?importChunkUrl';

const renderer = new RendererMain(
  {
    // App Config
  },
  'app', // App div ID
  new ThreadXRenderDriver({
    coreWorkerUrl,
  });
);
```

## Core Extensions

To load fonts, and/or other custom code into the Core Space, you must write a
Core Extension and pass it via dynamically importable URL to the initialization
of the Renderer.

Just like with loading the ThreadX Core Web Worker for the ThreadX, you import
your core extension using the `@lightningjs/vite-plugin-import-chunk-url` plugin so that
it's code is bundled and loaded seperately from your main app's bundle.

You can write a Core Extension by extending the CoreExtension class from the
Core API like so:

```ts
import {
  CoreExtension,
  WebTrFontFace,
  SdfTrFontFace,
  type Stage,
} from '@lightning/renderer/core';

export default class MyCoreExtension extends CoreExtension {
  async run(stage: Stage) {
    // Load fonts into core
    stage.fontManager.addFontFace(
      new WebTrFontFace('Ubuntu', {}, '/fonts/Ubuntu-Regular.ttf'),
    );

    stage.fontManager.addFontFace(
      new SdfTrFontFace(
        'Ubuntu',
        {},
        'msdf',
        stage,
        '/fonts/Ubuntu-Regular.msdf.png',
        '/fonts/Ubuntu-Regular.msdf.json',
      ),
    );
  }
}
```

And then in your application's main entry point you can import it using
`@lightningjs/vite-plugin-import-chunk-url`:

```ts
import coreExtensionModuleUrl from './MyCoreExtension.js?importChunkUrl';

// Set up driver, etc.

// Initialize the Renderer
const renderer = new RendererMain(
  {
    // Other Renderer Config...
    coreExtensionModule: coreExtensionModuleUrl,
  },
  'app',
  driver,
);
```
