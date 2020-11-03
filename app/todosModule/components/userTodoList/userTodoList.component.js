(function () {
  "use strict";
  var userTodoList = {
    templateUrl:
      "app/todosModule/components/userTodoList/userTodoList.component.html",
    bindings: {
      userTodos: "<",
    },
  };

  angular.module("todos").component("userTodoList", userTodoList);
})();
