'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$rootScope', '$location', '$http', 'APIFactory', '$window', '$document', 'errorMessage', 'deleteValidation', 'loadingModal'];

  function SidebarController($rootScope, $location, $http, APIFactory, $window, $document, errorMessage, deleteValidation, loadingModal) {
    const vm = this;
    vm.allActivated = true;
    vm.favActivated = false;
    vm.subscriptions = [];
    vm.allArticle = [];
    vm.getSubscritions = getSubscritions;
    vm.deleteFeed = deleteFeed;
    vm.getAllFeedItems = getAllFeedItems;
    vm.getFavoriteItems = getFavoriteItems;
    vm.getFeedItems = getFeedItems;
    vm.getItems = getItems;


    function getSubscritions() {
      APIFactory.getSubscritions().then(function (data) {
        console.log(data)
        vm.subscriptions = data.data.subscriptions;
      }).catch(function (errResponse) {
        errorMessage.showErrorModal(errResponse.status);
      });
    }

    function getAllFeedItems() {
      vm.allActivated = true;
      vm.favActivated = false;
      $rootScope.$broadcast('allFeedItems');
      if (vm.subscriptions) {
        vm.subscriptions.forEach(function (feed) {
          feed.active = false;
        });
      }
    }

    function getFavoriteItems() {
      $rootScope.$broadcast('favorites_end');
      vm.allActivated = false;
      vm.favActivated = true;
      vm.subscriptions.forEach(function (feed) {
        feed.active = false;
      });
    }

    function getFeedItems(id) {
      vm.feed_id = id;
      $rootScope.$broadcast('feed_id', vm.feed_id);
    }

    function deleteFeed(id) {
      deleteValidation.showDeleteModal().then(function (response) {
        if (response === true) {
          loadingModal.showloadingModal(true);
          APIFactory.deleteFeed(id).then(function (data) {
            loadingModal.closeLoadingModal();
            vm.getSubscritions();
          }).catch(function (errResponse) {
            loadingModal.closeLoadingModal();
            errorMessage.showErrorModal(errResponse.status);
          });
        }
      }).catch(function (response) {
        console.log(response);
      });
    }

    function getItems(index, id) {
      if (event.target.classList.contains('remove')) {
        return;
      }
      vm.subscriptions.map(function (feed) {
        feed.active = false;
      });
      vm.subscriptions[index].active = true;
      vm.allActivated = false;
      vm.favActivated = false;
      vm.getFeedItems(id);
    }

    $rootScope.$on('getSubscription', function (event) {
      vm.getSubscritions();
    });
  }
})();
