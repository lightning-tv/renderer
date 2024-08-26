async function automation(settings) {
  await test(settings);
}
async function test({
  renderer,
  testRoot,
  snapshot
}) {
  const nodeSize = {
    width: 300,
    height: 300
  };
  const t1 = renderer.createNode({
    ...nodeSize,
    x: 90,
    y: 90,
    color: 4278190335,
    shader: renderer.createShader("RoundedRectangle", {
      radius: 100
    }),
    parent: testRoot
  });
  const t1Radius = renderer.createTextNode({
    mountX: 1,
    x: testRoot.width - 90,
    y: 90,
    fontSize: 40,
    fontFamily: "Ubuntu",
    text: "radius: 100",
    parent: testRoot,
    color: 4294967295
  });
  const t2 = renderer.createNode({
    ...nodeSize,
    x: 90,
    y: 540,
    color: 16711935,
    shader: renderer.createDynamicShader([
      renderer.createEffect(
        "radius",
        {
          radius: 0
        },
        "r1"
      ),
      renderer.createEffect(
        "border",
        {
          color: 4278255615,
          width: 10
        },
        "e1"
      )
    ]),
    parent: testRoot
  });
  const t2Radius = renderer.createTextNode({
    mountX: 1,
    x: testRoot.width - 90,
    y: 540,
    fontSize: 40,
    fontFamily: "Ubuntu",
    text: "radius: 0",
    parent: testRoot,
    color: 4294967295
  });
  const t2Border = renderer.createTextNode({
    mountX: 1,
    x: testRoot.width - 90,
    y: 590,
    fontSize: 40,
    fontFamily: "Ubuntu",
    text: "border: 10",
    parent: testRoot,
    color: 4294967295
  });
  await snapshot({ name: "startup" });
  const shaderAnimation = t1.animate(
    {
      x: 1140,
      shaderProps: {
        radius: 150
      }
    },
    {
      duration: 500
    }
  );
  shaderAnimation.start();
  await shaderAnimation.waitUntilStopped();
  t1Radius.text = "radius: " + t1.shader.props.radius.toString();
  await snapshot({ name: "animation1" });
  const shaderAnimation2 = t2.animate(
    {
      x: 1140,
      shaderProps: {
        r1: {
          radius: 150
        },
        e1: {
          width: 50
        }
      }
    },
    {
      duration: 500
    }
  );
  shaderAnimation2.start();
  await shaderAnimation2.waitUntilStopped();
  t2Radius.text = "radius: " + t2.shader.props.r1.radius.toString();
  t2Border.text = "border: " + t2.shader.props.e1.width.toString();
  await snapshot({ name: "animation2" });
  console.log("ready!");
}
export {
  automation,
  test as default
};
//# sourceMappingURL=shader-animation-BvIRR8zS.js.map
