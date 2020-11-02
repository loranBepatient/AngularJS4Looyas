angular.module("mySuperApp").config(appConfig);

function appConfig($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enable: true,
    requireBase: false,
  });

  var routes = [{ name: "home", url: "/" }];

  routes.forEach(function (route) {
    $stateProvider.state(route);
  });
}
