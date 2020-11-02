var todoDetail = {
  templateUrl: "app/todos/todoDetail/todoDetail.component.html",
  controller: controller,
};

function controller(todosService, $stateParams) {
  var ctrl = this;
  ctrl.todo = undefined;

  ctrl.$onInit = onInit;

  function onInit() {
    console.log($stateParams);

    todosService.getTodo($stateParams.id).then(function (todo) {
      ctrl.todo = todo;
    });
  }
}

angular.module("todos").component("todoDetail", todoDetail);
