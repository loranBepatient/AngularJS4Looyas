(function () {
  "use strict";
  var loginPage = {
    templateUrl: "app/loginModule/pages/loginPage.component.html",
    controller: controller,
  };

  function controller(LoginService) {
    var ctrl = this;

    ctrl.onLogin = onLogin;

    function onLogin(credentials) {
      LoginService.login(credentials);
    }
  }

  angular.module("loginModule").component("loginPage", loginPage);
})();
