var component = {
  templateUrl: "./app/todo/todo.component.html",
  bindings: {
    title: "@",
  },
};

angular.module("mySuperApp").component("todo", component);
