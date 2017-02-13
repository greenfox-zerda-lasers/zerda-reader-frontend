(function () {
  angular
    .module('zerdaReader')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$location', '$rootScope'];

  function HomeController($location, $rootScope) {
    const vm = this;
    (function () {
      if (localStorage.token.length === 0) {
        $location.path('/login');
      }
    })();
  }

})();
