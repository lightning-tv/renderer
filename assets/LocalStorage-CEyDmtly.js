function loadStorage(testName) {
  if (typeof window.localStorage === "undefined") {
    return null;
  }
  try {
    const serializedState = localStorage.getItem("".concat(testName, "-state"));
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
}
function saveStorage(testName, state) {
  if (typeof window.localStorage === "undefined") {
    return;
  }
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("".concat(testName, "-state"), serializedState);
  } catch (err) {
  }
}
function clearStorage(testName) {
  if (typeof window.localStorage === "undefined") {
    return;
  }
  try {
    localStorage.removeItem("".concat(testName, "-state"));
  } catch (err) {
  }
}
export {
  clearStorage as c,
  loadStorage as l,
  saveStorage as s
};
//# sourceMappingURL=LocalStorage-CEyDmtly.js.map
