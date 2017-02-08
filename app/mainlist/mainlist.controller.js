(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http'];

  function MainlistController($location, $rootScope, $http) {
    const vm = this;
    vm.makeActive = makeActive;
    vm.favoriteHandling = favoriteHandling;
    // vm.changeFavoriteIcon =
    // vm.getItem = getItem;
    // $rootScope.$on('feeditem', function (event, items) {
    //   vm.articles = items;
    // });

    function makeActive($index) {
      if (vm.articles[$index].active === true) {
        vm.articles[$index].active = false;
      } else {
        vm.articles.map(function (article) {
          article.active = false;
        });
        vm.articles[$index].active = true;
      }
    }

    function favoriteHandling(id) {
      $http({
        method: 'PUT',
        data: {
          item_id: id
        },
        url: 'https://zerda-reader-mockback.gomix.me/favorites',
      }).then(function (data) {
      }).catch(function (data) {
        console.log('error');
      });
    }
    // function changeFavoriteIcon($index){
    //       if ($scope.class === 'uncheckedstar') {
    //         $scope.class = 'checkedstar';
    //       } else {
    //         $scope.class = 'uncheckedstar';
    //     };
    //   }

    (function () {
      $rootScope.$on('feeditem', function (event, items) {
        vm.articles = items;
      });
    })();
  }
})();
