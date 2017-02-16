(function () {
  'use strict';

  angular
    .module('zerdaReader')
    .directive('popupOpen', popupOpen);

  function popupOpen() {
    return {
      restrict: 'C',
      scope: {
        trigger: '@popupOpen',
      },
      link: function (scope, element, attrs) {
        var visible = false;
        var hidden = true;
        scope.$watch('trigger', function (value) {
          console.log(value);

          // if (value) {
          //   $timeout(function () {
          //     element[0].focus();
          //     // scope[attrs.focus] = false;
          //   });
          // }
        });
      },
    };
  }
})();
