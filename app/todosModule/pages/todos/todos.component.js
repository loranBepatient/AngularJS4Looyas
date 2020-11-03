(function () {
  "use strict";

  var component = {
    templateUrl: "./app/todosModule/pages/todos/todos.component.html",
    controller: controller,
  };

  function controller(TodosService, $state) {
    var ctrl = this;
    ctrl.todos = null;

    ctrl.$onInit = onInit;

    ctrl.addOne = addOne;
    ctrl.markCompleted = markCompleted;
    ctrl.deleteTodo = deleteTodo;
    ctrl.editTodo = editTodo;

    function onInit() {
      TodosService.getTodosWithUsers()
        .then(function (todosWithUsers) {
          ctrl.todos = todosWithUsers;
        })
        .catch(function (error) {
          alert("Impossible de recuperer les informations");
        });
    }

    function addOne() {
      ctrl.counter++;
    }

    function markCompleted(id) {
      var index = ctrl.todos.findIndex(function (todo) {
        return todo.id === +id;
      });
      ctrl.todos[index].completed = !ctrl.todos[index].completed;
    }

    function deleteTodo(id) {
      ctrl.todos = ctrl.todos.filter(function (todo) {
        return todo.id !== id;
      });
    }

    function editTodo(id) {
      $state.go("todo", { id: id });
    }
  }

  angular.module("todos").component("todosPage", component);
})();
