'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', 'errorMessage', 'loadingModal'];

  function SignUpController($location, $rootScope, $http, APIFactory, errorMessage, loadingModal) {
    const vm = this;
    vm.backToLogin = backToLogin;
    vm.signUp = signUp;
    vm.respond = [];
    vm.errMessage = '';
    vm.email = '';
    vm.password = '';
    vm.confirmPassword = '';

    function signUp() {
      if (vm.password !== vm.confirmPassword) {
        vm.errMessage = 'Your passwords don\'t match. Please retype your password to confirm it.'
      } else if (vm.email !== '' && vm.password !== '') {
        loadingModal.showloadingModal(true);
        APIFactory.postSignUp(vm.email, vm.password)
        .then(function (data) {
          loadingModal.closeLoadingModal();
          vm.signUpValidation(data);
        })
        .catch(function (errResponse) {
          loadingModal.closeLoadingModal();
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
