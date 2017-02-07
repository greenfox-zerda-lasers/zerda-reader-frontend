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
        vm.respond = (data.data);
        if (vm.respond.result === 'success') {
          localStorage.setItem('token', vm.respond.token);
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
module.exports = loginModule;