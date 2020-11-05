(function () {
  "use strict";

  appConfig.$inject = ["$urlRouterProvider", "$locationProvider"];

  function appConfig($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enable: true,
      requireBase: false,
    });

    $urlRouterProvider.otherwise("/login");
  }

  angular.module("mySuperApp").config(appConfig);
})();
