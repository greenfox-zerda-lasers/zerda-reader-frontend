(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function MainlistController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.makeActive = makeActive;
    vm.favoriteHandling = favoriteHandling;
    // vm.getItem = getItem;
    // $rootScope.$on('feeditem', function (event, items) {
    //   vm.articles = items;
    // });

    function makeActive($index) {
      console.log(vm.articles[$index].active);
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
      APIFactory.putFav(id).then(function (data) {
      }).catch(function (data) {
        console.errod('Change favorite status failed');
      });
    }

    (function listenFeedItems() {
      $rootScope.$on('feeditem', function (event, items) {
        vm.articles = items;
      });
    })();
  }
})();
