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
      query: "@",
    },
  };

  angular.module("todos").component("todosList", component);
})();
