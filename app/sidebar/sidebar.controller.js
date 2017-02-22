(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$window', '$document', 'errorMessage', 'deleteValidation'];

  function SidebarController($location, $rootScope, $http, APIFactory, $window, $document, errorMessage, deleteValidation) {
    const vm = this;
    vm.allActivated = true;
    vm.getSubs = getSubs;
    vm.deleteFeed = deleteFeed;
    vm.getAll = getAll;
    vm.getFav = getFav;
    vm.getFeed = getFeed;
    vm.clickItem = clickItem;
    vm.makePopupVisible = makePopupVisible;

    function getSubs() {
      APIFactory.getSubs().then(function (data) {
        vm.subscriptions = data.data.subscriptions;
      }).catch(function (errResponse) {
        errorMessage.show(errResponse.status);
      });
    }

    function getAll() {
      APIFactory.getAll().then(function (data) {
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
        errorMessage.show(errResponse.status);
      })
    }

    vm.getAll();

    function getFav() {
      APIFactory.getFav().then(function (data) {
        vm.allArticle = data.data.feed;
        $rootScope.$broadcast('feeditems', vm.allArticle);
        vm.allActivated = false;
        vm.favActivated = true;
        vm.subscriptions.forEach(function (feed) {
          feed.active = false;
        });
      }).catch(function (errResponse) {
        errorMessage.show(errResponse.status);
      });
    }

    function getFeed(id) {
      vm.feed_id = id;
      $rootScope.$broadcast('feed_id', vm.feed_id);
    }

    function deleteFeed(id) {
      deleteValidation.show().then(function (response) {
        if (response === true) {
          APIFactory.deleteItem(id).then(function (data) {
            vm.getSubs();
          }).catch(function (errResponse) {
            errorMessage.show(errResponse.status);
          });
        }
      }).catch(function (response) {
        console.log(response);
      });
    }

    function clickItem(index, id) {

      if (event.target.classList.contains('delete')) {
        return;
      }
      vm.subscriptions.map(function (feed) {
        feed.active = false;
      });
      vm.subscriptions[index].active = true;
      vm.allActivated = false;
      vm.favActivated = false;

      vm.getFeed(id);
    }

    function makePopupVisible(index) {
      vm.subscriptions.map(function (feed) {
        if (feed.active){
          feed.popupVisible = 'visible';
        } else {
          feed.popupVisible = 'hidden';
        }
      });
    }

    $rootScope.$on('getSubscription', function (event) {
      console.log('megj0tt');
      vm.getSubs();
    });
  }
})();
