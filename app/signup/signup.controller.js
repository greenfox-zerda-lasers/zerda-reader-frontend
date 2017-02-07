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
    }
    function backToLogin() {
      $location.path('/login');
    }
  }
})();
