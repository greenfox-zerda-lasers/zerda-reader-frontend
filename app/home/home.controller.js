'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$location', '$rootScope'];

  function HomeController($location, $rootScope) {
    const vm = this;
    vm.checkLocalStorage = checkLocalStorage;

    function checkLocalStorage() {
      if (!localStorage.token) {
        $location.path('/login');
      }
    }
    vm.checkLocalStorage();
  }

})();
