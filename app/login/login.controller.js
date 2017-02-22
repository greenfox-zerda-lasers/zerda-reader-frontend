'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function LoginController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.token = {};
    vm.respond = '';
    vm.login = login;
    vm.userValidation = userValidation;
    vm.signUpView = signUpView;

    function login() {
      if (!vm.email && !vm.password) {
        vm.errorMessage = 'Wrong username or password. Try again.';
      } else if (vm.email !== '' && vm.password !== '') {
        APIFactory.postLogin(vm.email, vm.password)
        .then(function (data) {
          vm.userValidation(data);
        })
        .catch(function (errResponse) {
          errorMessage.showErrorModal(errResponse.status);
        });
      }
    }

    function userValidation(data) {
      vm.respond = (data.data);
      if (vm.respond.result === 'success') {
        localStorage.setItem('token', vm.respond.token);
        $location.path('/home');
      } else if (vm.respond.result === 'fail') {
        vm.errorMessage = 'Wrong username or password. Try again.';
        vm.email = '';
        vm.password = '';
      }
    }

    function signUpView() {
      $location.path('/signup');
    }
  }
})();
