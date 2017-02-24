(function () {
  angular
    .module('zerdaReader')
    .controller('ModalController', ModalController);

  ModalController.$inject = ['$scope'];

  function ModalController($scope) {
    const vm = this;
    vm.visibility = true;
  }
})();
