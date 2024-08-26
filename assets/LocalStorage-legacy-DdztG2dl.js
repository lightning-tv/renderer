;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        exports({
          c: clearStorage,
          l: loadStorage,
          s: saveStorage
        });
        function loadStorage(testName) {
          if (typeof window.localStorage === "undefined") {
            return null;
          }
          try {
            var serializedState = localStorage.getItem("".concat(testName, "-state"));
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
            var serializedState = JSON.stringify(state);
            localStorage.setItem("".concat(testName, "-state"), serializedState);
          } catch (err) {}
        }
        function clearStorage(testName) {
          if (typeof window.localStorage === "undefined") {
            return;
          }
          try {
            localStorage.removeItem("".concat(testName, "-state"));
          } catch (err) {}
        }
      }
    };
  });
})();
//# sourceMappingURL=LocalStorage-legacy-DdztG2dl.js.map
