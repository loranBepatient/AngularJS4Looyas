(function () {
  "use strict";
  var userTodoList = {
    templateUrl:
      "app/todosModule/components/userTodoList/userTodoList.component.html",
    bindings: {
      userTodos: "<",
    },

    controller: controller,
  };

  function controller() {
    this.$onInit = function () {
      console.log(this);
    };
  }

  angular.module("todos").component("userTodoList", userTodoList);
})();
