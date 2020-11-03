(function () {
  "use strict";

  var todoDetail = {
    templateUrl: "app/todosModule/pages/todoDetail/todoDetail.component.html",
    controller: controller,
  };

  function controller(TodosService, $stateParams) {
    var ctrl = this;
    ctrl.todo = null;
    ctrl.user = null;
    ctrl.userTodos = null;

    ctrl.$onInit = onInit;

    function onInit() {
      getUser();
    }

    function getUser() {
      TodosService.getUserWithTodos($stateParams.id).then(function (result) {
        ctrl.todo = result.todo;
        ctrl.userTodos = result.userTodos;
        ctrl.user = result.user;
      });
    }
  }

  angular.module("todos").component("todoDetail", todoDetail);
})();
