'use strict';
(function () {

  angular
    .module('zerdaReader')
    .directive('focusAdd', focusAdd);

  function focusAdd($timeout) {
    return {
      restrict: 'A',
      scope: {
        trigger: '@focusAdd',
      },
      link: function (scope, element, attrs) {
        scope.$watch('trigger', function (value) {
          if (value) {
            $timeout(function () {
              element[0].focus();
              scope[attrs.focus] = false;
            });
          }
        });
      },
    };
  }
})();
