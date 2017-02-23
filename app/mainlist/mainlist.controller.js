'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$scope', '$timeout'];

  function MainlistController($location, $rootScope, $http, APIFactory, $scope, $timeout) {
    const vm = this;
    vm.makeActive = makeActive;
    // vm.displayFeed = displayFeed;
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

    main.on('scroll', function(e) {
      console.log(main);
      if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight-1) {
        vm.loadMore();
      }
    });

    function loadMore() {
      vm.offset++;
      APIFactory.getFeedItems(vm.id, vm.offset).then(function (data) {
        console.log(data)
        console.log(vm.articles)
        vm.articles.push.apply(vm.articles, data.data.feed);
        console.log(vm.articles);
      }).catch(function (errResponse) {
        errorMessage.show(errResponse.status);
      });
    }

    $rootScope.$on('feeditems', function (event, items) {
      vm.articles = items;
      // vm.offset = 0;
      // vm.allArticle = items;
      //vm.displayFeed();
    });

    $rootScope.$on('searchEvent', function (event, data) {
      vm.search = data;
    });

    $rootScope.$on('feed_id', function (event, id) {
      console.log(id)
      vm.id = id;
      vm.offset = 0;
      APIFactory.getFeedItems(id, vm.offset)
      .then(function (data) {
        vm.articles = data.data.feed;
      })
      .catch(function (errResponse) {
        errorMessage.showErrorModal(errResponse.status);
      });
    });
  }
})();
