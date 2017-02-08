(function () {
  'use strict';

  angular
    .module('zerdaReader')
    .directive('favoriteIcon', favoriteIcon);

  function favoriteIcon() {
    let directive = {
      restrict: "E",
      scope: {
        article: '=',
      },
      templateUrl: 'app/components/favorite.directive.html',
      link: function(scope) {
        scope.click = function(){
          console.log(scope.article);
        }
      }
    };
    return directive;
  }
})();
