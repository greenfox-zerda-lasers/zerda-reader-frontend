(function () {
  angular
    .module('zerdaReader')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$rootScope', '$http'];

  function LoginController($location, $rootScope, $http) {
    const vm = this;
    vm.token = {};
    vm.login = login;
    vm.signUpView = signUpView;

    function login() {
      if (!vm.email && !vm.password) {
        vm.errorMessage = 'Wrong username or password. Try again.';
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
          } else if (vm.respond.result === 'fail') {
            vm.errorMessage = 'Wrong username or password. Try again.';
            vm.email = '';
            vm.password = '';
          }
        }).catch(function (data) {
          console.log(data);
        });
      }
    }
    function signUpView() {
      $location.path('/signup');
    }
  }
})();
