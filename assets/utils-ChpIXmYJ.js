async function waitForLoadedDimensions(node) {
  return new Promise((resolve) => {
    node.once("loaded", (_node, payload) => {
      const { width, height } = payload.dimensions;
      resolve({
        width,
        height
      });
    });
  });
}
export {
  waitForLoadedDimensions as w
};
//# sourceMappingURL=utils-ChpIXmYJ.js.map
