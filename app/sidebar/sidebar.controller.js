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
    vm.getFeed = getFeed;
    vm.clickItem = clickItem;
    vm.allActivated = true;
    vm.getFeed = getFeed;
    vm.generateData = generateData;

    function getSubs() {
      APIFactory.getSubs().then(function (data) {
        vm.subscriptions = data.data;
      }, function (errResponse) {
        console.error('Failed to load subscriptions')
      });
    }

    function getAll() {
      APIFactory.getAll().then(function (data) {
        vm.allArticle = data.data.feed;
        // console.log(vm.allArticle)
        $rootScope.$broadcast('feeditems', vm.allArticle);
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

    function generateData(){
      vm.allArticle.unshift({
       "id": 2345525,
       "title": "Fox on the Moon! " + Math.floor(Math.random()*100),
       "description:" : "...",
       "created": Date.now(),
       "feed_name": "Fox Crunch",
       "feed_id": 43673,
       "favorite": false,
       "opened": false,
       "url": "http://fox.com/moon"
     })
     $rootScope.$broadcast('feeditems', vm.allArticle);
     //console.log(vm.allArticle)
    }

    // window.setInterval(generateData, 10000);

    vm.clickitem = function ($index) {
      vm.subscriptions.map(function (folder) {
        folder.active = false;
      });
      vm.subscriptions[$index].active = true;
      vm.allActivated = false;
      vm.favActivated = false;
    };

    function getFeed(id) {

      //Ez a függvény kell hogy kikérje, a kattintott feed id-ját és összes hozzá tartozó cikket és broadcastolja a mainlisthez
      vm.feed_id = id;

      $rootScope.$broadcast('feed_id', vm.feed_id);
      APIFactory.getFeed(vm.feed_id).then(function (data) {
        vm.allArticle = data.data;
        $rootScope.$broadcast('feeditems', vm.allArticle)
      }).catch(function (data) {
        console.error('Failed to load feed');
      });
    }
      //És itt kell megtörténje a sidebar aktív státuszának cserélgetése is

    function deleteSubscribe(id) {
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
    $rootScope.$on('getsubscription', function (event) {
      vm.getSubs();
    });

  }
})();
