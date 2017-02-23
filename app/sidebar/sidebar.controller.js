'use strict';

(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$window', '$document', 'errorMessage', 'deleteValidation'];

  function SidebarController($location, $rootScope, $http, APIFactory, $window, $document, errorMessage, deleteValidation) {
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
        vm.subscriptions = data.data.subscriptions;
      }).catch(function (errResponse) {
        errorMessage.showErrorModal(errResponse.status);
      });
    }

    function getAllFeedItems() {
      APIFactory.getAllFeedItems().then(function (data) {
        vm.allArticle = data.data.feed;
        $rootScope.$broadcast('feeditems', vm.allArticle);
        vm.allActivated = true;
        vm.favActivated = false;
        if (vm.subscriptions) {
          vm.subscriptions.forEach(function (feed) {
            feed.active = false;
          });
        }
      }).catch(function (errResponse) {
        errorMessage.showErrorModal(errResponse.status);
      })
    }

    vm.getAllFeedItems();

    function getFavoriteItems() {
      APIFactory.getFavoriteItems().then(function (data) {
        vm.allArticle = data.data.feed;
        $rootScope.$broadcast('feeditems', vm.allArticle);
        vm.allActivated = false;
        vm.favActivated = true;
        vm.subscriptions.forEach(function (feed) {
          feed.active = false;
        });
      }).catch(function (errResponse) {
        errorMessage.showErrorModal(errResponse.status);
      });
    }

    function getFeedItems(id) {
      vm.feed_id = id;
      $rootScope.$broadcast('feed_id', vm.feed_id);
    }

    function deleteFeed(id) {
      deleteValidation.showDeleteModal().then(function (response) {
        if (response === true) {
          APIFactory.deleteFeed(id).then(function (data) {
            vm.getSubscritions();
          }).catch(function (errResponse) {
            errorMessage.showErrorModal(errResponse.status);
          });
        }
      }).catch(function (response) {
        console.log(response);
      });
    }

    function getItems(index, id) {
      if (event.target.classList.contains('delete')) {
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
      console.log('megj0tt');
      vm.getSubscritions();
    });
  }
})();
