(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$scope'];

  function MainlistController($location, $rootScope, $http, APIFactory, $scope) {
    const vm = this;
    vm.makeActive = makeActive;
    vm.displayFeed = displayFeed;
    vm.loadMore = loadMore;
    vm.pack = 15;


    var main = angular.element(document.querySelector("#mainlist"));

    main.on('scroll', function(e){
      if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight-1) {
        vm.loadMore();
        console.log(vm.offset)
      }
    });

    //window.setInterval(vm.getFeed, 6000);

    function displayFeed() {
      if (vm.offset * vm.pack + vm.pack <= vm.allArticle.length) {
        vm.articles = vm.articles.concat(vm.allArticle.slice(vm.offset, vm.offset+vm.pack));
      } else {
        vm.articles = vm.articles.concat(vm.allArticle.slice(vm.offset*vm.pack, vm.allArticle.length));

      }
      $scope.$apply()
      console.log("disp",vm.articles);
    }

    function loadMore() {
      vm.offset++;
      displayFeed();
    }

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

        APIFactory.openedArticle(vm.articles[$index].id).then(function (data) {
        }).catch(function (data) {
          console.error('Change opened status failed');
        });
      }
    }

    $rootScope.$on('feeditems', function (event, items) {
      vm.articles = [];
      vm.offset = 0;
      vm.allArticle = items;
      console.log(items);
      vm.displayFeed();
    });
  }
})();
