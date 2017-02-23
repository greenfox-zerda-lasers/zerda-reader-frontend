'use strict';
(function () {
  angular
    .module('zerdaReader')
    .controller('DeleteValidationController', DeleteValidationController);

  DeleteValidationController.$inject = ['$scope', 'close'];

  function DeleteValidationController($scope, close) {
    const vm = this;
    vm.visibility = true;
    vm.closeModal = closeModal;

    function closeModal(result) {
      vm.visibility = !vm.visibility;
      close(result)
    }
  }
})();
