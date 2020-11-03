(function () {
  "use strict";

  function loginConfig($stateProvider) {
    var routes = [
      {
        name: "login",
        url: "/login",
        component: "loginPage",
      },
    ];

    routes.forEach(function (route) {
      $stateProvider.state(route);
    });
  }

  angular.module("loginModule").config(loginConfig);
})();
