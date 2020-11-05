(function () {
  "use strict";

  todosConfig.$inject = ["$stateProvider", "$locationProvider"];

  function todosConfig($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enable: true,
      requireBase: false,
    });

    var routes = [
      {
        name: "todos",
        url: "/todos",
        component: "todosPage",
      },
      {
        name: "todo",
        url: "/todos/{id}",
        component: "todoDetail",
      },
    ];

    routes.forEach(function (route) {
      $stateProvider.state(route);
    });
  }
  angular.module("todos").config(todosConfig);
})();
