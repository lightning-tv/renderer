const Colors = {
  Black: 255,
  Red: 4278190335,
  Green: 16711935,
  Blue: 65535,
  Magenta: 4278255615,
  Gray: 2139062271,
  White: 4294967295
};
const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
async function test(settings) {
  const { renderer, testRoot } = settings;
  const nodes = [];
  const renderNode = (t) => {
    const node = renderer.createTextNode({
      x: Math.random() * 1900,
      y: Math.random() * 1080,
      text: "CANVAS " + t,
      fontFamily: "sans-serif",
      parent: testRoot,
      fontSize: 80
    });
    nodes.push(node);
    node.color = Object.values(Colors)[randomIntBetween(0, Object.keys(Colors).length - 1)] || 4278190335;
  };
  const spawn = (amount = 1) => {
    for (let i = 0; i < amount; i++) {
      renderNode(i.toString());
    }
  };
  const despawn = (amount = 100) => {
    for (let i = 0; i < amount; i++) {
      const node = nodes.pop();
      node.destroy();
    }
  };
  const move = () => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      node.x = randomIntBetween(0, 1600);
      node.y = randomIntBetween(0, 880);
    }
  };
  const newColor = () => {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      node.color = Object.values(Colors)[randomIntBetween(0, Object.keys(Colors).length - 1)] || 255;
    }
  };
  let animating = false;
  const animate = () => {
    animating = !animating;
    const animateNode = (node) => {
      nodes.forEach((node2) => {
        node2.animate(
          {
            x: randomIntBetween(20, 1740),
            y: randomIntBetween(20, 900),
            rotation: Math.random() * Math.PI
          },
          {
            duration: 3e3,
            easing: "ease-out"
          }
        ).start();
      });
    };
    const animateRun = () => {
      if (animating) {
        for (let i = 0; i < nodes.length; i++) {
          animateNode();
        }
        setTimeout(animateRun, 3050);
      }
    };
    animateRun();
  };
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      spawn();
    } else if (event.key === "ArrowDown") {
      despawn();
    } else if (event.key === "ArrowLeft") {
      move();
    } else if (event.key === "ArrowRight") {
      move();
    } else if (event.key === "1") {
      newColor();
    } else if (event.key === " ") {
      animate();
    }
  });
  spawn();
}
export {
  test as default
};
//# sourceMappingURL=text-canvas-CwAy4iIW.js.map
