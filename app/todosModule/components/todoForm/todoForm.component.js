(function () {
  "use strict";

  var component = {
    templateUrl: "app/todosModule/components/todoForm/todoForm.component.html",
    bindings: {
      todo: "<",
      name: "@",
    },
  };

  angular.module("todos").component("todoForm", component);
})();
