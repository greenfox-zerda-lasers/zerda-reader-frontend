(function () {
  angular
    .module('zerdaReader')
    .run(checkToken);

  checkToken.$inject = ['$location', '$rootScope'];

  function checkToken($location, $rootScope) {
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
