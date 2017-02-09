(function () {
  'use strict';

  angular
    .module('zerdaReader')
    .directive('favoriteIcon', favoriteIcon);

  function favoriteIcon(APIFactory) {
    let directive = {
      restrict: 'E',
      scope: {
        article: '=',
        color: '=?',
      },
      templateUrl: 'app/components/favorite.directive.html',
      link: link,
    };
    return directive;

    function link(scope, element, attrs) {
      scope.color = scope.article.favorite;

      scope.favHandling = function (id) {
        scope.color = !scope.color;
        APIFactory.putFav(id).then(function (data) {
        }).catch(function (data) {
          console.errod('Change favorite status failed');
        });
      };
    }
  }
})();
