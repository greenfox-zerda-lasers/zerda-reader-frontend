const signUpModule = angular.module('signUpModule', ['ngRoute', 'ngAnimate'])

signUpModule.controller('SignUpController', ['$http', '$location', function ($http, $location) {
  const vm = this;

  vm.signUp = function () {
    if (vm.email !== '' && vm.password !== '') {
      $http({
        method: 'POST',
        data: {
          email: vm.email,
          password: vm.password,
        },
        url: 'https://zerda-reader-mockback.gomix.me/user/signup',
      }).then(function (data) {
        vm.respond = (data.data);
        if (vm.respond.result === 'success') {
          localStorage.setItem("token", vm.respond.token);
          $location.path('/home');
        } else {
          vm.errorMessage = vm.respond.message;
          vm.email = '';
          vm.password = '';
        }
      }).catch(function (data) {
        console.log('error');
      });
    }
<<<<<<< HEAD:app/signup/signup.controller.js
  };
=======
  }

  vm.backToLogin = function() {
    $location.path('/login');
  };

>>>>>>> 42a4ff825dc00a74a947cfa6ac798e108cd96570:app/signup.js
}]);

module.exports = signUpModule;
