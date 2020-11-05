(function () {
  "use strict";

  function nameFilter() {
    return function (todos, name) {
      return todos.filter(function (todo) {

        var isNameMatchingWithTodoUserId = getNamesAreMatching(
          todo.user.name,
          name
        );

        return isNameMatchingWithTodoUserId;
      });
    };

    function getNamesAreMatching(name1, name2) {
      return name1.toLowerCase().includes(name2.toLowerCase());
    }
  }
  angular.module("todos").filter("nameFilter", nameFilter);
})();
