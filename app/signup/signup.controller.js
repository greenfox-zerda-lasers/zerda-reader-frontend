'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$location', '$rootScope', '$http'];

  function SignUpController($location, $rootScope, $http) {
    const vm = this;
    vm.backToLogin = backToLogin;
    vm.signUp = signUp;

    function signUp() {
      if (vm.email !== '' && vm.password !== '') {
        $http({
          method: 'POST',
          data: {
            email: vm.email,
            password: vm.password,
          },
          url: 'https://murmuring-everglades-41117.herokuapp.com/user/signup',
        }).then(function (data) {
          vm.respond = (data.data);
          console.log(vm.respond)
          if (vm.respond.result === 'success') {
            localStorage.setItem("token", vm.respond.token);
            $location.path('/home');
          } else {
            vm.errorMessage = vm.respond.message;
            vm.email = '';
            vm.password = '';
          }
        }).catch(function (errResponse) {
          errorMessage.showErrorModal(errResponse.status);
        });
      }
    }
    function backToLogin() {
      $location.path('/login');
    }
  }
})();
