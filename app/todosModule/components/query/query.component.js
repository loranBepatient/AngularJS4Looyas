(function () {
  "use strict";
  var query = {
    templateUrl: "app/todosModule/components/query/query.component.html",
    controller: controller,
  };

  function controller() {
    var ctrl = this;
    ctrl.query = { value: "", options: { debounce: 1000 } };
    ctrl.onChange = onChange;

    function onChange() {
      console.log(ctrl.query);
    }
  }
  angular.module("todos").component("query", query);
})();
