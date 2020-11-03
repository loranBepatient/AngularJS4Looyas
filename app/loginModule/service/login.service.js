(function () {
  "use strict";
  function LoginService($http) {
    var loginEndPoint =
      "https://beta-mobi-care4today.bepatientsolutions.com/rest/v2/;login";

    return {
      login: login,
    };

    function login(credentials) {
      console.log(credentials);
    }
  }
  angular.module("loginModule").factory("LoginService", LoginService);
})();
