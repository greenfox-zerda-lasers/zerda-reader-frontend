'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$location', '$scope', '$rootScope'];

  function NavbarController($location, $scope, $rootScope) {
    const vm = this;
    vm.logout = logout;
    vm.search = ''

    $scope.$watch('navbarCtrl.search', function(value) {
      $rootScope.$broadcast('searchEvent', value);
    });

    function logout() {
      localStorage.clear();
      $location.path('/login');
    }
  }
})();
