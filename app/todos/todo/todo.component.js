var component = {
  templateUrl: "./app/todos/todo/todo.component.html",
  bindings: {
    todo: "<",
    done: "&",
    delete: "&",
    edit: "&",
  },
  controller: controller,
};

function controller() {
  var ctrl = this;

  ctrl.onDone = onDone;
  ctrl.onDelete = onDelete;
  ctrl.onEdit = onEdit;

  function onDone(id) {
    ctrl.done({ id: id });
  }

  function onDelete(id) {
    ctrl.delete({ id: id });
  }

  function onEdit(id) {
    ctrl.edit({ id: id });
  }
}
angular.module("mySuperApp").component("todo", component);
