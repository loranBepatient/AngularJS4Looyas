var component = {
  templateUrl: "./app/todos/todo/todo.component.html",
  bindings: {
    todo: "<",
    done: "&",
    delete: "&",
  },
  controller: controller,
};

function controller() {
  var ctrl = this;

  ctrl.onDone = onDone;
  ctrl.onDelete = onDelete;

  function onDone(id) {
    ctrl.done({ id: id });
  }

  function onDelete(id) {
    ctrl.delete({ id: id });
  }
}
angular.module("mySuperApp").component("todo", component);
