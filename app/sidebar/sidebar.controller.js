(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http', 'APIFactory', '$window', '$document', 'errorMessage'];

  function SidebarController($location, $rootScope, $http, APIFactory, $window, $document, errorMessage) {
    const vm = this;
    vm.allActivated = true;
    vm.getSubs = getSubs;
    vm.deleteSubscribe = deleteSubscribe;
    vm.getAll = getAll;
    vm.getFav = getFav;
    vm.getFeed = getFeed;
    vm.clickItem = clickItem;
    vm.makePopupVisible = makePopupVisible;
    // vm.generateData = generateData;

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
        vm.allArticle = data.data;
        $rootScope.$broadcast('feeditems', vm.allArticle);
        vm.allActivated = false;
        vm.favActivated = true;
        vm.subscriptions.forEach(function (feed) {
          feed.active = false;
        });
      }).catch(function (data) {
        console.error('Failed to load favorites');
      });
    }

    function generateData(){
      vm.allArticle.unshift({
       "id": 2345525,
       "title": "Fox on the Moon! " + Math.floor(Math.random() * 100),
       "description:" : "...",
       "created": Date.now(),
       "feed_name": "Fox Crunch",
       "feed_id": 43673,
       "favorite": false,
       "opened": false,
       "url": "http://fox.com/moon"
     })
     $rootScope.$broadcast('feeditems', vm.allArticle);
    }

    window.setInterval(generateData, 60000);

    function getFeed(id) {
      vm.feed_id = id;
      $rootScope.$broadcast('feed_id', vm.feed_id);
    }

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
      // console.log(feed.popupVisible);
      // console.log(vm.subscriptions[index]);
      // if (vm.subscriptions[index].popupVisible === 'visible') {
      //   console.log('Mi;rt?');
      //   feed.popupVisible = 'hidden';
      //   vm.subscriptions[index].popupVisible = 'hidden';
      // } else {
      //   vm.subscriptions[index].popupVisible = 'visible';
      //   feed.popupVisible = 'visible';
      // }
    }

    $rootScope.$on('getsubscription', function (event) {
      vm.getSubs();
    });

  }
})();
