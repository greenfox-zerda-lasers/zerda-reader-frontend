'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$scope', '$timeout'];

  function MainlistController($location, $rootScope, $http, APIFactory, $scope, $timeout) {
    const vm = this;
    vm.makeActive = makeActive;
    vm.displayFeed = displayFeed;
    vm.loadMore = loadMore;
    vm.articles = [];
    vm.allArticle = [];
    vm.pack = 15;
    vm.offset = 0;

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

        APIFactory.openArticle(vm.articles[$index].id)
        .then(function () {})
        .catch(function (errResponse) {
          errorMessage.showErrorModal(errResponse.status);
        });
      }
    }

    var main = angular.element(document.querySelector("#mainlist"));

    main.on('scroll', function(e){
      if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight-1) {
        vm.loadMore();
      }
    });

    function displayFeed() {
      if (vm.offset * vm.pack + vm.pack <= vm.allArticle.length) {
        vm.articles = vm.articles.concat(vm.allArticle.slice(vm.offset, vm.offset + vm.pack));
      } else {
        vm.articles = vm.articles.concat(vm.allArticle.slice(vm.offset*vm.pack, vm.allArticle.length));
      }
      $timeout()
    }

    function loadMore() {
      vm.offset++;
      displayFeed();
    }

    $rootScope.$on('feeditems', function (event, items) {
      vm.articles = [];
      vm.offset = 0;
      vm.allArticle = items;
      vm.displayFeed();
    });

    $rootScope.$on('searchEvent', function (event, data) {
      vm.search = data;
    });

    $rootScope.$on('feed_id', function (event, id) {
      APIFactory.getFeedItems(id)
      .then(function (data) {
        vm.allArticle = data.data.feed;
        vm.articles = [];
        vm.offset = 0;
        vm.displayFeed();
      })
      .catch(function (errResponse) {
        errorMessage.showErrorModal(errResponse.status);
      });
    });
  }
})();
