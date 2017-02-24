'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', 'errorMessage'];

  function LoginController($location, $rootScope, $http, APIFactory, errorMessage) {
    const vm = this;
    vm.token = {};
    vm.respond = '';
    vm.login = login;
    vm.errMessage = '';
    vm.email = '';
    vm.password = '';
    vm.userValidation = userValidation;
    vm.signUpView = signUpView;

    console.log(localStorage);
    function login() {
      if (vm.email && vm.password) {
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
        vm.errMessage = vm.respond.message;
        vm.email = '';
        vm.password = '';
      }
    }

    function signUpView() {
      $location.path('/signup');
    }
  }
})();
