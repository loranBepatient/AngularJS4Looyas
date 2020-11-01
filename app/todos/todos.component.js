var component = {
  templateUrl: "./app/todos/todos.component.html",
  controller: controller,
};

function controller(todosService) {
  var ctrl = this;
  ctrl.todos = [];

  ctrl.$onInit = onInit;

  ctrl.addOne = addOne;
  ctrl.substractOne = substractOne;
  ctrl.markCompleted = markCompleted;
  ctrl.deleteTodo = deleteTodo;

  function onInit() {
    todosService.getTodos().then(function (todos) {
      ctrl.todos = todos;
    });
  }

  function addOne() {
    ctrl.counter++;
  }

  function substractOne() {
    if (ctlr.counter > 0) {
      ctrl.counter--;
    }
  }

  function markCompleted(id) {
    var index = ctrl.todos.findIndex(function (todo) {
      return todo.id === +id;
    });
    ctrl.todos[index].completed = true;
  }

  function deleteTodo(id) {
    ctrl.todos = ctrl.todos.filter(function (todo) {
      return todo.id !== id;
    });
  }
}

angular.module("todos").component("todos", component);
