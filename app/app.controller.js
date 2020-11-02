(function () {
  "use strict";

  function controller() {
    this.title = "mon super titre";
  }

  angular.module("mySuperApp").controller("mySuperController", controller);
})();
