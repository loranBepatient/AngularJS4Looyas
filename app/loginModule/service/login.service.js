(function () {
  "use strict";
  function LoginService($http) {
    var loginEndPoint =
      "https://beta-mobi-care4today.bepatientsolutions.com/rest/v2/;login";

    return {
      login: login,
    };

    function login(credentials) {
      return $http
        .post(loginEndPoint, _parseLogin(credentials))
        .then(onLoginComplete)
        .catch(onLoginFailed);
    }

    function onLoginComplete(response) {
      return response;
    }

    function onLoginFailed(error) {
      throw new Error(error.message);
    }

    function _parseLogin(credentials) {
      return {
        login: credentials.email,
        password: credentials.password,
      };
    }
  }
  angular.module("loginModule").factory("LoginService", LoginService);
})();
