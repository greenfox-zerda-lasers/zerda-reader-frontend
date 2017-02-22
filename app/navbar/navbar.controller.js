(function () {
  angular
    .module('zerdaReader')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$location', '$scope', '$rootScope'];

  function NavbarController($location, $scope, $rootScope) {
    const vm = this;
    vm.logout = logout;
    vm.search = ''
    console.log("search", vm.search);

    $scope.$watch('navbarCtrl.search', function(value) {
      console.log('Name change to ' + value);
      $rootScope.$broadcast('searchEvent', value);
    });


    function logout() {
      localStorage.clear();
      $location.path('/login');
    }
  }
})();
