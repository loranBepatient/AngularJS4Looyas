(function () {
  "use strict";

  TodosService.$inject = ["$http", "$q"];

  function TodosService($http, $q) {
    var todosEndPoint = "https://jsonplaceholder.typicode.com/todos";
    var usersEndPoint = "https://jsonplaceholder.typicode.com/users";

    return {
      getTodosWithUsers: getTodosWithUsers,
      getUserWithTodos: getUserWithTodos,
    };

    function getUserWithTodos(selectedTodoId) {
      var deferred = $q.defer();
      var userWithTodo = {};

      getTodo(selectedTodoId)
        .then(function (todo) {
          Object.assign(userWithTodo, { todo: todo });
          return $q.all([getUser(todo.userId), getUserTodos(todo.userId)]);
        })
        .then(function ([user, userTodos]) {
          Object.assign(userWithTodo, { user: user, userTodos: userTodos });
          deferred.resolve(userWithTodo);
        })
        .catch(handleError);

      return deferred.promise;
    }

    function getTodosWithUsers() {
      return $q
        .all([getTodos(), getUsers()])
        .then(getTodosWithUsersComplete)
        .catch(getTodosWithUsersFailed);

      function getTodosWithUsersComplete([todos, users]) {
        return todos.map(function (todo) {
          var user = users.find(function (user) {
            return user.id === todo.userId;
          });
          var updatedTodo = Object.assign(todo, { user: user });
          return updatedTodo;
        });
      }

      function getTodosWithUsersFailed(error) {
        handleError(error);
      }
    }

    function getUser(id) {
      return $http
        .get(`${usersEndPoint}/${id}`)
        .then(getUserComplete)
        .catch(getUserFailed);

      function getUserComplete(response) {
        return response.data;
      }
      function getUserFailed(error) {
        handleError(error);
      }
    }

    function getUserTodos(_userId) {
      return getTodos().then(getUserTodosComplete);

      function getUserTodosComplete(response) {
        return response.filter(function (todo) {
          return todo.userId === _userId;
        });
      }
    }

    function getTodo(id) {
      return $http.get(`${todosEndPoint}/${id}`).then(getTodoComplete);

      function getTodoComplete(response) {
        return response.data;
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
