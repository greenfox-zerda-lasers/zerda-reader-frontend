(function () {
  'use strict';

  angular
    .module('zerdaReader')
    .directive('favoriteIcon', favoriteIcon);

  function favoriteIcon(APIFactory, errorMessage, loadingModal) {
    const directive = {
      restrict: 'E',
      scope: {
        article: '=',
        color: '=?',
      },
      templateUrl: 'app/components/directives/favorite.directive/favorite.directive.html',
      link: link,
    };
    return directive;

    function link(scope) {
      scope.color = scope.article.favorite;

      scope.favHandling = function (id) {
        scope.color = !scope.color;
        loadingModal.showloadingModal(true);
        APIFactory.putFavorite(id).then(function () {
          loadingModal.closeLoadingModal();
        }).catch(function (errResponse) {
          loadingModal.closeLoadingModal();
          errorMessage.showErrorModal(errResponse.status);
        });
      };
    }
  }
})();
