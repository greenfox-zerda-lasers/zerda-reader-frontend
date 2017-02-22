(function () {
  angular
    .module('zerdaReader')
    .controller('ErrorController', ErrorController);

  ErrorController.$inject = ['$scope', 'error'];

  function ErrorController($scope, error) {
    const vm = this;
    vm.visibility = true;
    vm.error = error;
    vm.close = close;

    function close() {
      vm.visibility = false;
   }
  }
})();
