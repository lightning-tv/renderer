async function txCompression({ renderer, testRoot }) {
  renderer.createTextNode({
    x: 100,
    y: 100,
    color: 4294967295,
    alpha: 1,
    text: "etc1 compression in .pvr",
    fontFamily: "Ubuntu",
    fontSize: 30,
    parent: testRoot
  });
  renderer.createNode({
    x: 100,
    y: 170,
    width: 550,
    height: 550,
    src: "../assets/test-etc1.pvr",
    parent: testRoot
  });
  renderer.createTextNode({
    x: 800,
    y: 100,
    color: 4294967295,
    alpha: 1,
    text: "s3tc compression in .ktx",
    fontFamily: "Ubuntu",
    fontSize: 30,
    parent: testRoot
  });
  renderer.createNode({
    x: 800,
    y: 170,
    width: 400,
    height: 400,
    src: "../assets/test-s3tc.ktx",
    parent: testRoot
  });
}
export {
  txCompression as default
};
//# sourceMappingURL=tx-compression-BsxsALfp.js.map
