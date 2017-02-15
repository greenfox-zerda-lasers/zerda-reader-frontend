(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function MainlistController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.makeActive = makeActive;

    function makeActive($index, event) {
      if (event.target.classList.contains('star')) {
        return;
      }
      if (vm.articles[$index].active === true) {
        vm.articles[$index].active = false;
      } else {
        vm.articles.map(function (article) {
          article.active = false;
        });
        vm.articles[$index].active = true;
        vm.articles[$index].opened = true;

        APIFactory.openedArticle(vm.articles[$index].id).then(function (data){}).catch(function (data) {
          console.error('Change opened status failed');
        });
      }
    }

    $rootScope.$on('feeditem', function (event, items) {
      vm.articles = items;
    });
  }
})();
