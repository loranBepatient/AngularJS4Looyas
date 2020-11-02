(function () {
  "use strict";

  var component = {
    templateUrl:
      "./app/todosModule/components/todosList/todosList.component.html",
    bindings: {
      todos: "<",
      done: "&",
      delete: "&",
      edit: "&",
    },
  };

  angular.module("todos").component("todosList", component);
})();
