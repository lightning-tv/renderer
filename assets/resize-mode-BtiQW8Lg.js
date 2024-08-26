import { p as paginateTestRows } from "./paginateTestRows-BnRDThRO.js";
import { P as PageContainer } from "./PageContainer-DGLlaQQn.js";
import { d as deg2Rad } from "./index-ClbJRtQD.js";
import "./LocalStorage-CLyIOpmF.js";
const testscreenImg = "/renderer/assets/testscreen-B6KykUZE.png";
const testscreenRImg = "/renderer/assets/testscreen_rotated-fXg0gRdD.png";
async function automation(settings) {
  await (await test(settings)).snapshotPages();
}
const SQUARE_SIZE = 600;
const PADDING = 20;
async function test(settings) {
  const { renderer } = settings;
  const pageContainer = new PageContainer(settings, {
    width: renderer.settings.appWidth,
    height: renderer.settings.appHeight,
    title: "Resizemode Tests"
  });
  await paginateTestRows(pageContainer, [
    {
      title: "Texture Width > Height - resizeMode cover maximum width of node and clipY - 0, 0.5, 1",
      content: async (rowNode) => {
        let curX = 0;
        for (let i = 0; i < 3; i++) {
          renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE - 300,
            texture: renderer.createTexture("ImageTexture", {
              src: testscreenImg
            }),
            textureOptions: {
              resizeMode: {
                type: "cover",
                clipY: [0, 0.5, 1][i],
                clipX: [0, 0.5, 1][i]
              }
            },
            parent: rowNode
          });
          curX += SQUARE_SIZE + PADDING;
        }
        rowNode.height = SQUARE_SIZE - 300;
        return rowNode.height;
      }
    },
    {
      title: "Texture Width > Height - resizeMode cover maximum height of node and clipX - 0, 0.5, 1",
      content: async (rowNode) => {
        let curX = 0;
        for (let i = 0; i < 3; i++) {
          renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE - 200,
            texture: renderer.createTexture("ImageTexture", {
              src: testscreenImg
            }),
            textureOptions: {
              resizeMode: {
                type: "cover",
                clipY: [0, 0.5, 1][i],
                clipX: [0, 0.5, 1][i]
              }
            },
            parent: rowNode
          });
          curX += SQUARE_SIZE + PADDING;
        }
        rowNode.height = SQUARE_SIZE - 200;
        return rowNode.height;
      }
    },
    {
      title: "Texture Width < Height - resizeMode cover maximum width of node and clipY - 0, 0.5, 1",
      content: async (rowNode) => {
        let curX = 0;
        for (let i = 0; i < 3; i++) {
          renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE - 300,
            texture: renderer.createTexture("ImageTexture", {
              src: testscreenRImg
            }),
            textureOptions: {
              resizeMode: {
                type: "cover",
                clipY: [0, 0.5, 1][i],
                clipX: [0, 0.5, 1][i]
              }
            },
            parent: rowNode
          });
          curX += SQUARE_SIZE + PADDING;
        }
        rowNode.height = SQUARE_SIZE - 300;
        return rowNode.height;
      }
    },
    {
      title: "Texture Width < Height - resizeMode cover maximum height of node and clipX - 0,0.25,0.5,0.75,1",
      content: async (rowNode) => {
        let curX = 0;
        for (let i = 0; i < 5; i++) {
          renderer.createNode({
            x: curX,
            width: SQUARE_SIZE - 400,
            height: SQUARE_SIZE - 100,
            texture: renderer.createTexture("ImageTexture", {
              src: testscreenRImg
            }),
            textureOptions: {
              resizeMode: {
                type: "cover",
                clipX: [0, 0.25, 0.5, 0.75, 1][i],
                clipY: [0, 0.25, 0.5, 0.75, 1][i]
              }
            },
            parent: rowNode
          });
          curX += SQUARE_SIZE + PADDING - 330;
        }
        rowNode.height = SQUARE_SIZE - 200;
        return rowNode.height;
      }
    },
    {
      title: "Texture Width > Height - resizeMode contain maximum height of node",
      content: async (rowNode) => {
        let curX = 0;
        const containerProps = {
          width: SQUARE_SIZE,
          height: SQUARE_SIZE - 300,
          parent: rowNode,
          color: 858993663,
          clipping: true
        };
        const textureNodeProps = {
          width: containerProps.width,
          height: containerProps.height,
          clipping: true,
          texture: renderer.createTexture("ImageTexture", {
            src: testscreenImg
          }),
          textureOptions: {
            resizeMode: {
              type: "contain"
            }
          }
        };
        const container1 = renderer.createNode({
          ...containerProps,
          x: curX
        });
        renderer.createNode({
          ...textureNodeProps,
          parent: container1
        });
        curX += containerProps.width + PADDING;
        rowNode.height = containerProps.height;
        return rowNode.height;
      }
    },
    {
      title: "Texture Width > Height - resizeMode contain maximum width of node",
      content: async (rowNode) => {
        const curX = 0;
        const containerProps = {
          width: SQUARE_SIZE,
          height: SQUARE_SIZE - 200,
          parent: rowNode,
          color: 858993663,
          clipping: true
        };
        const textureNodeProps = {
          width: containerProps.width,
          height: containerProps.height,
          clipping: true,
          texture: renderer.createTexture("ImageTexture", {
            src: testscreenImg
          }),
          textureOptions: {
            resizeMode: {
              type: "contain"
            }
          }
        };
        const container1 = renderer.createNode({
          ...containerProps,
          x: curX
        });
        renderer.createNode({
          ...textureNodeProps,
          parent: container1
        });
        rowNode.height = containerProps.height;
        return rowNode.height;
      }
    },
    {
      title: "Texture Width < Height - resizeMode contain maximum width of node",
      content: async (rowNode) => {
        let curX = 0;
        const containerProps = {
          width: SQUARE_SIZE - 400,
          height: SQUARE_SIZE - 200,
          parent: rowNode,
          color: 858993663,
          clipping: true
        };
        const textureNodeProps = {
          width: containerProps.width,
          height: containerProps.height,
          clipping: true,
          texture: renderer.createTexture("ImageTexture", {
            src: testscreenRImg
          }),
          textureOptions: {
            resizeMode: {
              type: "contain"
            }
          }
        };
        const container1 = renderer.createNode({
          ...containerProps,
          x: curX
        });
        renderer.createNode({
          ...textureNodeProps,
          parent: container1
        });
        curX += containerProps.width + PADDING;
        const container2 = renderer.createNode({
          ...containerProps,
          x: curX
        });
        renderer.createNode({
          ...textureNodeProps,
          mount: 0.5,
          x: containerProps.width / 2,
          y: containerProps.height / 2,
          pivotX: 0.5,
          rotation: deg2Rad(45),
          parent: container2
        });
        rowNode.height = containerProps.height;
        return rowNode.height;
      }
    },
    {
      title: "Texture Width < Height - resizeMode contain maximum height of node",
      content: async (rowNode) => {
        let curX = 0;
        const containerProps = {
          width: SQUARE_SIZE - 150,
          height: SQUARE_SIZE - 200,
          parent: rowNode,
          color: 858993663,
          clipping: true
        };
        const textureNodeProps = {
          width: containerProps.width,
          height: containerProps.height,
          clipping: true,
          texture: renderer.createTexture("ImageTexture", {
            src: testscreenRImg
          }),
          textureOptions: {
            resizeMode: {
              type: "contain"
            }
          }
        };
        const container1 = renderer.createNode({
          ...containerProps,
          x: curX
        });
        renderer.createNode({
          ...textureNodeProps,
          parent: container1
        });
        curX += containerProps.width + PADDING;
        const container2 = renderer.createNode({
          ...containerProps,
          x: curX
        });
        renderer.createNode({
          ...textureNodeProps,
          mount: 0.5,
          x: containerProps.width / 2,
          y: containerProps.height / 2,
          pivotX: 0.5,
          rotation: deg2Rad(45),
          parent: container2
        });
        rowNode.height = containerProps.height;
        return rowNode.height;
      }
    }
  ]);
  return pageContainer;
}
export {
  automation,
  test as default
};
//# sourceMappingURL=resize-mode-BtiQW8Lg.js.map
