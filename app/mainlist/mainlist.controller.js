(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function MainlistController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.makeActive = makeActive;
    vm.offset = 1;
    vm.articles = [];

    //console.log(angular.element(document.querySelector("#mainlist")));

    var main = angular.element(document.querySelector("#mainlist"));

    main.on('scroll', function(e){
      //console.log(e)
      //console.log(e.target.offsetHeight, e.target.scrollHeight, e.target.scrollTop)
      var id = 43673;
      if (e.target.scrollTop > 40) {
        APIFactory.getFeed(id).then(function (data) {
          vm.articles = (data.data);
          //console.log(vm.allArticle)
          //vm.loadMore();
          $rootScope.$broadcast('feeditem', vm.articles);
        }).catch(function (data) {
          console.error('Failed to load feed items');
        })
      }
    });

    function displayFeed() {
      var ending
      if (vm.offset + 15 < vm.allArticle.length){
        ending = vm.offset + 15;
      } else {
        ending = vm.allArticle.length;
      }
      console.log(ending);
      for (var i = vm.offset * 15; i < ending; i++) {
        vm.articles.push(vm.allArticle[i]);
      }
      $rootScope.$broadcast('feeditem', vm.articles);
      console.log(vm.articles);
    }

    function loadMore() {
      vm.displayFeed();
      vm.offset++;
      console.log(vm.offset)
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
      }
    }

    (function listenFeedItems() {
      $rootScope.$on('feeditem', function (event, items) {
        vm.articles = items;
      });
    })();
  }
})();
