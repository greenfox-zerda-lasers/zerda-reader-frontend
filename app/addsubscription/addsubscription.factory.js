'use strict';

angular
  .module('zerdaReader')
  .factory('SubsFactory', SubsFactory);


function SubsFactory() {

  var SubsFactory = {};

  SubsFactory.makeVisible = function (vm.visible) {
      if (vm.visible === 'hidden') {
        vm.visible = 'visible';
      } else {
        vm.visible = 'hidden';
      }
    return vm.visible;
  };

  return SubsFactory;
}
