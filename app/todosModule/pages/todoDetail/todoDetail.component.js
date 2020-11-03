(function () {
  "use strict";

  var todoDetail = {
    templateUrl: "app/todosModule/pages/todoDetail/todoDetail.component.html",
    controller: controller,
  };

  function controller(TodosService, $stateParams) {
    var ctrl = this;
    ctrl.todo = null;
    ctrl.userTodos = null;

    ctrl.$onInit = onInit;

    function onInit() {
      TodosService.getTodo($stateParams.id)
        .then(function (todo) {
          ctrl.todo = todo;
          return TodosService.getTodosForSelectedUser(todo.userId);
        })
        .then(function (filteredTodos) {
          ctrl.userTodos = filteredTodos;
        });
    }
  }

  angular.module("todos").component("todoDetail", todoDetail);
})();
