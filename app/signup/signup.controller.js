'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', 'errorMessage'];

  function SignUpController($location, $rootScope, $http, APIFactory, errorMessage) {
    const vm = this;
    vm.backToLogin = backToLogin;
    vm.signUp = signUp;
    vm.respond = [];
    vm.errMessage = '';
    vm.email = '';
    vm.password = '';

    function signUp() {
      if (vm.email !== '' && vm.password !== '') {
        APIFactory.postSignUp(vm.email, vm.password)
        .then(function (data) {
          vm.signUpValidation(data);
        })
        .catch(function (errResponse) {
          errorMessage.showErrorModal(errResponse.status);
        });
      }
    }

    function signUpValidation(data) {
      vm.respond = data.data;
      if (vm.respond.result === 'success') {
        localStorage.setItem('token', vm.respond.token);
        $location.path('/home');
      } else {
        vm.errMessage = vm.respond.message;
        vm.email = '';
        vm.password = '';
      }
    }

    function backToLogin() {
      $location.path('/login');
    }
  }
})();
