angular.module("mySuperApp").config(appConfig);

function appConfig($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enable: true,
    requireBase: false,
  });

  $urlRouterProvider.otherwise("/todos");
}
