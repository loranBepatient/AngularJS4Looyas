angular.module("todos").factory("todosService", todosService);

function todosService($http) {
  var url = "https://jsonplaceholder.typicode.com/todos";

  return {
    getTodos: getTodos,
  };

  function getTodos() {
    return $http.get(url).then(getTodosComplete).catch(getTodosFailed);

    function getTodosComplete(response) {
      return response.data;
    }

    function getTodosFailed(error) {
      return error.message;
    }
  }
}
