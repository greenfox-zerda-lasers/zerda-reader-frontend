(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http'];

  function SidebarController($location, $rootScope, $http) {
    let vm = this;
    vm.getSubscription = getSubscription;
    vm.getAll = getAll;
    vm.getFav = getFav;
    vm.getFeed = getFeed;
    vm.deleteSubscribe = deleteSubscribe;

    function getSubscription() {
      vm.subscriptions = '';
      $http({
        method: 'GET',
        url: 'https://zerda-reader-mockback.gomix.me/subscription',
      }).then(function (data) {
        vm.subscriptions = data.data;
        console.log(vm.subscriptions)
      }).catch(function (data) {
        console.log('error');
      });
    }

    function getAll() {
      $http({
        method: 'GET',
        url: 'https://zerda-reader-mockback.gomix.me/feed',
      }).then(function (data) {
        vm.articles = data.data.feed;
      }).catch(function (data) {
        console.log('error');
      });
    };

    function getFav() {
      $http({
        method: 'GET',
        url: 'https://zerda-reader-mockback.gomix.me/favorites',
      }).then(function (data) {
        vm.articles = data.data;
      }).catch(function (data) {
        console.log('error');
      });
    };

    function getFeed($index, id) {
      $http({
        method: 'GET',
        url: 'https://zerda-reader-mockback.gomix.me/feed/43675'
      }).then(function (data) {
        vm.articles = (data.data);
      }).catch(function (data) {
        console.log('error');
      });
    };
    function deleteSubscribe(id) {
      var feed_id = id;
      console.log(feed_id);
      $http({
        method: 'DELETE',
        url: 'https://zerda-reader-mockback.gomix.me/subscribe/'+feed_id
      }).then ( function(data){
        vm.getSubscription();
      }).catch(function (data) {
        console.log('error');
      })
    }
  }
})();
//
//
//   $scope.clickitem = function($index){
//     $scope.subscriptions.map( function ( folder ) {
//       folder.active = false;
//     });
//     $scope.subscriptions[ $index ].active = true;
//   }
//
//
