var component = {
  templateUrl: "./app/todos/todos.component.html",
  controller: controller,
};

function controller() {
  var ctrl = this;
  ctrl.counter = 0;
  ctrl.addOne = addOne;
  ctrl.substractOne = substractOne;

  function addOne() {
    ctrl.counter++;
  }

  function substractOne() {
    if (ctlr.counter > 0) {
      ctrl.counter--;
    }
  }
}

angular.module("mySuperApp").component("todos", component);
