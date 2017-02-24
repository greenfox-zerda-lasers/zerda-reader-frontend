(function () {
  angular
    .module('zerdaReader')
    .controller('ModalController', ModalController);

  ModalController.$inject = ['$scope', 'active'];

  function ModalController($scope, active) {
    const vm = this;
    vm.visibility = active;
    vm.close = function(){
      vm.visibility = false;
    }
  }
})();
