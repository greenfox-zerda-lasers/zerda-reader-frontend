(function () {
  angular
    .module('zerdaReader')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$location', '$rootScope'];

  function HomeController($location, $rootScope) {
    (function () {
      if (localStorage.token.length === 0) {
        $location.path('/login');
      }
    })();
  }
})();
