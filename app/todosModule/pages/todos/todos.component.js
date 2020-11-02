var component = {
  templateUrl: "./app/todosModule/pages/todos/todos.component.html",
  controller: controller,
};

function controller(todosService, $state) {
  var ctrl = this;
  ctrl.todos = [];

  ctrl.$onInit = onInit;

  ctrl.addOne = addOne;
  ctrl.markCompleted = markCompleted;
  ctrl.deleteTodo = deleteTodo;
  ctrl.editTodo = editTodo;

  function onInit() {
    todosService.getTodos().then(function (todos) {
      ctrl.todos = todos;
    });
  }

  function addOne() {
    ctrl.counter++;
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

  function editTodo(id) {
    console.log(id);
    console.log($state);
    $state.go("todo", { id: id });
  }
}

angular.module("todos").component("todosPage", component);
