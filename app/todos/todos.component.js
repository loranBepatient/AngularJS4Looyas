var component = {
  templateUrl: "./app/todos/todos.component.html",
  controller: controller,
};

function controller() {
  var ctrl = this;
  ctrl.counter = 0;
  ctrl.addOne = addOne;
  ctrl.substractOne = substractOne;
  ctrl.markCompleted = markCompleted;
  ctrl.deleteTodo = deleteTodo;

  ctrl.todos = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
  ];

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

angular.module("mySuperApp").component("todos", component);
