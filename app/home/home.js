(function () {
  angular
    .module('zerdaReader')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$location', '$rootScope'];

  function HomeController($location, $rootScope) {
    // const vm = this;
    // vm.checkToken = checkToken;
    (function () {
      if (localStorage.length === 0) {
        $location.path('/login');
      }
    })();
  }
})();
