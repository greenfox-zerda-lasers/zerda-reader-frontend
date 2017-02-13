(function () {
  angular
    .module('zerdaReader')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$location', '$rootScope'];

  function HomeController($location, $rootScope) {
    var vm = this;
    // vm.click = click;

    // function click() {
    //   console.log('sdf')
    //   $rootScope.$broadcast('click');
    // }

    (function () {
      if (localStorage.token.length === 0) {
        $location.path('/login');
      }
    })();
  }

})();
