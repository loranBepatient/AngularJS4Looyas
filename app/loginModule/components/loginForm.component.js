(function () {
  "use strict";
  var loginForm = {
    templateUrl: "app/loginModule/components/loginForm.component.html",
    bindings: {
      login: "&",
    },
    controller: controller,
  };

  function controller() {
    var ctrl = this;
    ctrl.onSubmit = onSubmit;

    ctrl.form = {
      email: "",
      password: "",
    };

    function onSubmit() {
      ctrl.login({ credentials: ctrl.form });
    }
  }

  angular.module("loginModule").component("loginForm", loginForm);
})();
