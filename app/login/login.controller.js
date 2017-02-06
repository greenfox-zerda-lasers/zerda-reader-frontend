const loginModule = angular.module('loginModule', ['ngRoute', 'ngAnimate'])

loginModule.controller('LoginController', ['$http', '$location', function ($http, $location) {
  const vm = this;
  vm.token = {};

  vm.login = function () {
    console.log(vm.email)
    if (!vm.email && !vm.password) {
      console.log('alert');
      vm.errorMessage = 'Wrong username or password. Try again.';
      console.log(vm);
    } else if (vm.email !== '' && vm.password !== '') {

      $http({
        method: 'POST',
        data: {
          email: vm.email,
          password: vm.password,
        },
        url: 'https://zerda-reader-mockback.gomix.me/user/login',
      }).then(function (data) {
<<<<<<< HEAD:app/login/login.controller.js
        vm.respond = (data.data);
        if (vm.respond.result === 'success') {
          localStorage.setItem('token', vm.respond.token);
=======
        console.log(data);
        var respond = (data.data);
        if (respond.result === 'success') {
          localStorage.setItem('token', respond.token);
>>>>>>> 42a4ff825dc00a74a947cfa6ac798e108cd96570:app/login.js
          $location.path('/home');
      } else if (respond.result === 'fail') {
          vm.errorMessage = 'Wrong username or password. Try again.';

          vm.email = '';
          vm.password = '';
        }
      }).catch(function (data) {
        console.log(data);
      });
    }
  };
  vm.signUpView = function () {
    $location.path('/signup');
  };
}]);

<<<<<<< HEAD:app/login/login.controller.js
module.exports = loginModule;
=======
module.exports = loginModule

// LoginController;
>>>>>>> 42a4ff825dc00a74a947cfa6ac798e108cd96570:app/login.js
