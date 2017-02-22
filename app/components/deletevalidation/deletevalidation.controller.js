(function () {
  angular
    .module('zerdaReader')
    .controller('DeleteValidationController', DeleteValidationController);

  DeleteValidationController.$inject = ['$scope', 'close'];

  function DeleteValidationController($scope, close) {
    const vm = this;
    vm.visibility = true;
    // vm.response = response;
    vm.close = close;

    function close(result) {
      // console.log(result);
    }
  }
})();
