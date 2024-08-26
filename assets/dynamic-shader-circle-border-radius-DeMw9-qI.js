async function automation(settings) {
  await test(settings);
  await settings.snapshot();
}
async function test({ renderer, testRoot }) {
  const containerOnlyCircle1 = renderer.createNode({
    x: 40,
    y: 120,
    width: 400,
    height: 400,
    color: 65535,
    parent: testRoot
  });
  renderer.createNode({
    x: 0,
    y: 0,
    width: 400,
    height: 400,
    color: 4278190335,
    shader: renderer.createShader("DynamicShader", {
      effects: [
        {
          type: "radius",
          props: {
            radius: 400 / 2
          }
        }
      ]
    }),
    parent: containerOnlyCircle1
  });
  const containerCircle1 = renderer.createNode({
    x: 40 + 440,
    y: 120,
    width: 400,
    height: 400,
    color: 65535,
    parent: testRoot
  });
  renderer.createNode({
    x: 0,
    y: 0,
    width: 400,
    height: 400,
    color: 4278190335,
    shader: renderer.createShader("DynamicShader", {
      effects: [
        {
          type: "radius",
          props: {
            radius: 400 / 2
          }
        },
        {
          type: "border",
          props: {
            width: 6,
            color: 4210752255
          }
        }
      ]
    }),
    parent: containerCircle1
  });
  const containerOnlyCircle2 = renderer.createNode({
    x: 40,
    y: 120 + 440,
    width: 152,
    height: 152,
    color: 65535,
    parent: testRoot
  });
  renderer.createNode({
    x: 0,
    y: 0,
    width: 152,
    height: 152,
    color: 4278190335,
    shader: renderer.createShader("DynamicShader", {
      effects: [
        {
          type: "radius",
          props: {
            radius: 152 / 2
          }
        }
      ]
    }),
    parent: containerOnlyCircle2
  });
  const containerCircle2 = renderer.createNode({
    x: 40 + 192,
    y: 120 + 440,
    width: 152,
    height: 152,
    color: 65535,
    parent: testRoot
  });
  renderer.createNode({
    x: 0,
    y: 0,
    width: 152,
    height: 152,
    color: 4278190335,
    shader: renderer.createShader("DynamicShader", {
      effects: [
        {
          type: "radius",
          props: {
            radius: 152 / 2
          }
        },
        {
          type: "border",
          props: {
            width: 6,
            color: 4210752255
          }
        }
      ]
    }),
    parent: containerCircle2
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=dynamic-shader-circle-border-radius-DeMw9-qI.js.map
