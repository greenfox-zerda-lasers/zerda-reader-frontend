(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function MainlistController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.makeActive = makeActive;
    vm.displayFeed = displayFeed;
    vm.loadMore = loadMore;
    vm.offset = 0;
    vm.pack = 15;


    var main = angular.element(document.querySelector("#mainlist"));

    main.on('scroll', function(e){
      if (e.target.scrollTop > 60) {
        vm.loadMore();
        console.log(vm.offset)
        // APIFactory.getFeed(vm.feed_id).then(function (data) {
        //   vm.articles = (data.data);
        // }).catch(function (data) {
        //   console.error('Failed to load feed items');
        // })
      }
    });

    //window.setInterval(vm.getFeed, 6000);

    function displayFeed() {
      console.log(vm.articles);
      if (vm.offset + vm.pack <= vm.allArticle.length) {
        vm.ending = vm.offset + vm.pack;
      } else {
        vm.ending = vm.allArticle.length;
      }
      for (var i = vm.offset * vm.pack; i < vm.ending; i++) {
        vm.articles.push(vm.allArticle[i]);
      }
      console.log(vm.articles);
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
      }
    }

    (function listenFeedId() {
      $rootScope.$on('feed_id', function (event, id) {
        vm.feed_id = id;
      });
    })();

    (function listenFeedItems() {
      $rootScope.$on('feeditems', function (event, items) {
        vm.articles = [];
        vm.allArticle = items;
        vm.displayFeed();
      });
    })();
  }
})();
