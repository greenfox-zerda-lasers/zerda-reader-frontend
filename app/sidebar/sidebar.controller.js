(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function SidebarController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.getSubs = getSubs;
    vm.deleteSubscribe = deleteSubscribe;
    vm.getAll = getAll;
    vm.getFav = getFav;
    vm.getFeed = getFeed;
    vm.clickItem = clickItem;
    vm.allActivated = true;

    function getSubs() {
      APIFactory.getSubs().then(function (data) {
        vm.subscriptions = data.data;
      }, function (errResponse) {
        console.error('Failed to load subscriptions')
      });
    }

    function getAll() {
      APIFactory.getAll().then(function (data) {
        vm.articles = data.data.feed;
        $rootScope.$broadcast('feeditem', vm.articles);
        vm.allActivated = true;
        vm.favActivated = false;
        if (vm.subscriptions) {
          vm.subscriptions.forEach(function (folder) {
            folder.active = false;
          });
        }
      }, function (errResponse) {
        console.error(errResponse, 'Failed to load all feed items');
      });
    }

    vm.getAll();

    function getFav() {
      APIFactory.getFav('favorites').then(function (data) {
        vm.articles = data.data;
        $rootScope.$broadcast('feeditem', vm.articles);
        vm.allActivated = false;
        vm.favActivated = true;
        vm.subscriptions.forEach(function (folder) {
          folder.active = false;
        });
      }).catch(function (data) {
        console.error('Failed to load favorites');
      });
    }

    function getFeed(id) {
      APIFactory.getFeed(id).then(function (data) {
        vm.articles = (data.data);
        $rootScope.$broadcast('feeditem', vm.articles);
      }).catch(function (data) {
        console.error('Failed to load feed items');
      });
    }

    function deleteSubscribe(id, event) {
      APIFactory.deleteItem(id).then(function (data) {
        vm.getSubs();
      }).catch(function (data) {
        console.error('Failed to delete subscription');
      });
    }

    function clickItem(index, id) {
      if (event.target.classList.contains('delete')) {
        return;
      }
      vm.subscriptions.map(function (folder) {
        folder.active = false;
      });
      vm.getFeed(id);
      vm.subscriptions[index].active = true;
      vm.allActivated = false;
      vm.favActivated = false;
    };


    function makePopupVisible() {
      if (vm.popupvisible === 'visible') {
        vm.popupvisible = 'hidden';
      } else {
        vm.popupvisible = 'visible';
      }
    }

    $rootScope.$on('getsubscription', function (event) {
      vm.getSubs();
    });

  }
})();
