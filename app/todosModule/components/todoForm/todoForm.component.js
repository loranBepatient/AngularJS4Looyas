(function () {
  "use strict";

  var component = {
    templateUrl: "app/todosModule/components/todoForm/todoForm.component.html",
    bindings: {
      todo: "<",
      name: "@",
    },
    controller: controller,
  };

  function controller() {}

  angular.module("todos").component("todoForm", component);
})();
