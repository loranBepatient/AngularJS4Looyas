(function () {
  "use strict";

  function TodosService($http, $q) {
    var todosEndPoint = "https://jsonplaceholder.typicode.com/todos";
    var usersEndPoint = "https://jsonplaceholder.typicode.com/users";

    return {
      getTodo: getTodo,
      getTodosWithUsers: getTodosWithUsers,
      getTodosForSelectedUser: getTodosForSelectedUser,
    };

    function getTodo(id) {
      return $http.get(`${todosEndPoint}/${id}`).then(getTodoComplete);

      function getTodoComplete(response) {
        return response.data;
      }
    }

    function getTodosForSelectedUser(id) {
      return getTodos().then(function (todos) {
        return todos.filter(function (todo) {
          return todo.userId === id && !todo.completed;
        });
      });
    }

    function getTodosWithUsers() {
      return $q
        .all([getTodos(), getUsers()])
        .then(getTodosWithUsersComplete)
        .catch(getTodosWithUsersFailed);

      function getTodosWithUsersComplete([todos, users]) {
        return todos.map(function (todo) {
          var user = users[todo.userId];
          var updatedTodo = Object.assign(todo, { user: user });
          return updatedTodo;
        });
      }

      function getTodosWithUsersFailed(error) {
        handleError(error);
      }
    }

    function getTodos() {
      return $http
        .get(todosEndPoint)
        .then(getTodosComplete)
        .catch(getTodosFailed);

      function getTodosComplete(response) {
        return response.data;
      }

      function getTodosFailed(error) {
        handleError(error);
      }
    }

    function getUsers() {
      return $http
        .get(usersEndPoint)
        .then(getUsersComplete)
        .catch(getUserFailed);

      function getUsersComplete(users) {
        return users.data;
      }

      function getUserFailed(error) {
        handleError(error);
      }
    }

    function handleError(error) {
      throw new Error(error.message);
    }
  }

  angular.module("todos").factory("TodosService", TodosService);
})();
