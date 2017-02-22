(function () {
  'use strict';

  angular
    .module('zerdaReader')
    .directive('favoriteIcon', favoriteIcon);

  function favoriteIcon(APIFactory) {
    const directive = {
      restrict: 'E',
      scope: {
        article: '=',
        color: '=?',
      },
      templateUrl: 'app/components/favorite.directive/favorite.directive.html',
      link: link,
    };
    return directive;

    function link(scope) {
      scope.color = scope.article.favorite;

      scope.favHandling = function (id) {
        scope.color = !scope.color;
        APIFactory.putFavorite(id).then(function (data) {
        }).catch(function (data) {
          console.error('Change favorite status failed');
        });
      };
    }
  }
})();
