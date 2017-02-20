(function () {
  angular
    .module('zerdaReader')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$location', '$rootScope'];

  function NavbarController($location) {
    const vm = this;
    vm.logout = logout;
    // vm.search
    // console.log(vm.search)

    function logout() {
      localStorage.clear();
      $location.path('/login');
    }
  }
})();
