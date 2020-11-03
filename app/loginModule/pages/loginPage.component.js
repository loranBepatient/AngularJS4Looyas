(function () {
  "use strict";
  var loginPage = {
    templateUrl: "app/loginModule/pages/loginPage.component.html",
    controller: controller,
  };

  function controller(LoginService, $state) {
    var ctrl = this;

    ctrl.onLogin = onLogin;

    function onLogin(credentials) {
      LoginService.login(credentials)
        .then(function (success) {
          _saveToLocalStorae(success.data);
          $state.go("todos");
        })
        .catch(function (error) {
          alert("identifiant ou mot de passe errone");
        });
    }

    function _saveToLocalStorae(data) {
      localStorage.setItem("iAuth", data.iauth);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem("uuid", data.uuid);
    }
  }

  angular.module("loginModule").component("loginPage", loginPage);
})();
