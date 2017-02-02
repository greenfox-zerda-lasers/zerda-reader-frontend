(function() {
  angular
    .module('zerdaReader')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$http', '$location', '$rootScope'];

  function NavbarController($http, $location, $rootScope) {
    var vm = this;
    vm.logout = logout;

    function logout (){
      localStorage.clear();
      $location.path( "/login" );
    }
  }
})();
