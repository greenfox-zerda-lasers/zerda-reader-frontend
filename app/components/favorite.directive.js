(function () {
  'use strict';

  angular
    .module('zerdaReader')
    .directive('favoriteIcon', favoriteIcon);

  function favoriteIcon() {
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
      scope.color = scope.article.favorite
      scope.favHandling = function () {
        // scope.color = scope.article.favorite;
        console.log('jhgj');
        // console.log(scope.favoriteCtrl.article, scope.favoriteCtrl.color);
      }
    }

    // FavoriteController.inject = ['$scope']

    // function FavoriteController() {
    //   let vm = this
      // vm.color = true

      // vm.color = vm.article.favorite;
    // }
  }


})();
