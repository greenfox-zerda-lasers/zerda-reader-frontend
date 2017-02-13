(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$window'];

  function SidebarController($location, $rootScope, $http, APIFactory, $window) {
    const vm = this;
    vm.getSubs = getSubs;
    vm.deleteSubscribe = deleteSubscribe;
    vm.getAll = getAll;
    vm.getFav = getFav;
    vm.getFeed = getFeed;
    vm.allActivated = true;
    vm.offset = 0;
    vm.articles = [];

    function getSubs() {
      APIFactory.getSubs().then(function (data) {
        vm.subscriptions = data.data;
      }, function(errResponse) {
        console.error('Failed to load subscriptions')
      });
    }

    function getAll() {
      APIFactory.getAll().then(function (data) {
        vm.articles = data.data.feed;
        $rootScope.$broadcast('feeditem', vm.articles);
        vm.allActivated = true;
        vm.favActivated = false;
        vm.subscriptions.forEach(function (folder) {
          folder.active = false;
        });
      }, function(errResponse) {
        console.error('Failed to load all feed items');
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

    function getFeed($index) {
      vm.clickitem($index);
      let id = 43673;
      APIFactory.getFeed(id, vm.offset).then(function (data) {
        for ( var i = vm.offset*10; i < vm.offset + 10; i++){
          vm.articles.push(data.data[i]);
        }
        // vm.articles = (data.data);
        $rootScope.$broadcast('feeditem', vm.articles);
      }).catch(function (data) {
        console.error('Failed to load feed items');
      });

    };


    function deleteSubscribe(id) {
      APIFactory.deleteItem(id).then(function (data) {
        vm.getSubs();
      }).catch(function (data) {
        console.error('Failed to delete subscription');
      })
    }

    (function () {
      $rootScope.$on('getsubscription', function (event) {
        getSubs();
      });
    })();

    vm.clickitem = function ($index) {
      vm.subscriptions.map(function (folder) {
        folder.active = false;
      });
      vm.subscriptions[$index].active = true;
      vm.allActivated = false;
      vm.favActivated = false;
    };
  }
})();
