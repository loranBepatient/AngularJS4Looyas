(function () {
  "use strict";
  function LoginService($http) {
    var loginEndPoint = "";
    return {
      login: login,
    };

    function login(credentials) {
      console.log(credentials);
    }
  }
  angular.module("loginModule").factory("LoginService", LoginService);
})();
