(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$window', '$document'];

  function SidebarController($location, $rootScope, $http, APIFactory, $window, $document) {
    const vm = this;
    vm.getSubs = getSubs;
    vm.deleteSubscribe = deleteSubscribe;
    vm.getAll = getAll;
    vm.getFav = getFav;
    vm.allActivated = true;
    vm.getFeed = getFeed;

    function getSubs() {
      APIFactory.getSubs().then(function (data) {
        vm.subscriptions = data.data;
      }, function(errResponse) {
        console.error('Failed to load subscriptions')
      });
    }

    function getAll() {
      APIFactory.getAll().then(function (data) {
        vm.allArticle = data.data.feed;
        $rootScope.$broadcast('feeditems', vm.allArticle);
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
      APIFactory.getFav().then(function (data) {
        vm.allArticle = data.data;
        $rootScope.$broadcast('feeditems', vm.allArticle);
        vm.allActivated = false;
        vm.favActivated = true;
        vm.subscriptions.forEach(function (folder) {
          folder.active = false;
        });
      }).catch(function (data) {
        console.error('Failed to load favorites');
      });
    }

    vm.clickitem = function ($index) {
      vm.subscriptions.map(function (folder) {
        folder.active = false;
      });
      vm.subscriptions[$index].active = true;
      vm.allActivated = false;
      vm.favActivated = false;
    };

    function getFeed($index, id) {

      //Ez a függvény kell hogy kikérje, a kattintott feed id-ját és összes hozzá tartozó cikket és broadcastolja a mainlisthez
      vm.feed_id = id;

      $rootScope.$broadcast('feed_id', vm.feed_id);
      APIFactory.getFeed(vm.feed_id).then(function (data) {
        vm.allArticle = data.data;
        $rootScope.$broadcast('feeditems', vm.allArticle);
      }).catch(function (data) {
        console.error('Failed to load feed');
      });

      //És itt kell megtörténje a sidebar aktív státuszának cserélgetése is
      vm.clickitem($index);
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

  }
})();
