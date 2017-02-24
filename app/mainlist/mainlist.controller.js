'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$scope', '$timeout', 'errorMessage', 'loadingModal'];

  function MainlistController($location, $rootScope, $http, APIFactory, $scope, $timeout, errorMessage, loadingModal) {
    const vm = this;
    vm.makeActive = makeActive;
    vm.loadMore = loadMore;
    vm.articles = [];
    vm.allArticle = [];
    vm.offset = 0;
    vm.main = angular.element(document.querySelector("#mainlist"));

    activate();

    function activate(){
      vm.offset = 0;
      loadingModal.showloadingModal(true);
      APIFactory.getAllFeedItems()
      .then(function (data) {
        vm.articles = data.data.feed;
        loadingModal.closeLoadingModal();
      })
      .catch(function (errResponse) {
        loadingModal.closeLoadingModal();
        errorMessage.showErrorModal(errResponse.status);
      });
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
        loadingModal.showloadingModal(true);
        APIFactory.openArticle(vm.articles[$index].id)
        .then(function () {
          loadingModal.closeLoadingModal();
        })
        .catch(function (errResponse) {
          loadingModal.closeLoadingModal();
          errorMessage.showErrorModal(errResponse.status);
        });
      }
    }

    vm.main.on('scroll', function(e) {
      if (e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight-1) {
        vm.loadMore();
      }
    });

    function loadMore() {
      vm.offset++;
      loadingModal.showloadingModal(true);
      APIFactory.getFeedItems(vm.id, vm.offset).then(function (data) {
        loadingModal.closeLoadingModal();
        vm.articles.push.apply(vm.articles, data.data.feed);
      }).catch(function (errResponse) {
        loadingModal.closeLoadingModal();
        errorMessage.show(errResponse.status);
      });
    }

    $rootScope.$on('favorites_end', function (event) {
      vm.offset = 0;
      loadingModal.showloadingModal(true);
      APIFactory.getFavoriteItems()
      .then(function (data) {
        loadingModal.closeLoadingModal();
        vm.articles = data.data.feed;
      })
      .catch(function (errResponse) {
        loadingModal.closeLoadingModal();
        errorMessage.showErrorModal(errResponse.status);
      });
    });

    $rootScope.$on('allFeedItems', function (event) {
      vm.offset = 0;
      loadingModal.showloadingModal(true);
      APIFactory.getAllFeedItems()
      .then(function (data) {
        loadingModal.closeLoadingModal();
        vm.articles = data.data.feed;
      })
      .catch(function (errResponse) {
        loadingModal.closeLoadingModal();
        errorMessage.showErrorModal(errResponse.status);
      });
    });

    $rootScope.$on('searchEvent', function (event, data) {
      vm.search = data;
    });

    $rootScope.$on('feed_id', function (event, id) {
      vm.id = id;
      vm.offset = 0;
      loadingModal.showloadingModal(true);
      APIFactory.getFeedItems(id, vm.offset)
      .then(function (data) {
        loadingModal.closeLoadingModal();
        vm.articles = data.data.feed;
      })
      .catch(function (errResponse) {
        loadingModal.closeLoadingModal();
        errorMessage.showErrorModal(errResponse.status);
      });
    });
  }
})();
