var counter = {
  templateUrl: "./app/counter/counter.component.html",
  bindings: {
    value: "<",
  },
};

angular.module("mySuperApp").component("counter", counter);
