(function () {
  angular
    .module('zerdaReader')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$location', '$rootScope'];

  function NavbarController($location) {
    const vm = this;
    vm.logout = logout;

    function logout() {
      localStorage.clear();
      $location.path('/login');
    }
  }
})();
