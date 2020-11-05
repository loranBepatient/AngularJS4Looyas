(function () {
  "use strict";
  var query = {
    templateUrl: "app/todosModule/components/query/query.component.html",
    controller: controller,
    bindings: {
      queryChange: "&",
    },
  };

  function controller() {
    var ctrl = this;
    ctrl.query = { value: "", options: { debounce: 1000 } };
    ctrl.onChange = onChange;

    function onChange() {
      ctrl.queryChange({ query: ctrl.query.value });
    }
  }
  angular.module("todos").component("query", query);
})();
