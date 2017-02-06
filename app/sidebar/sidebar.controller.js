(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http'];

  function SidebarController($location, $rootScope, $http) {
    let vm = this;
    vm.deleteSubscribe = deleteSubscribe;
    vm.getAll = getAll;
    vm.getFav = getFav;
    vm.getFeed = getFeed;
    vm.getSubscription = getSubscription;

    function getSubscription() {
      vm.subscriptions = '';
      $http({
        method: 'GET',
        url: 'https://zerda-reader-mockback.gomix.me/subscription',
      }).then(function (data) {
        vm.subscriptions = data.data;
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
        $rootScope.$broadcast('feeditem', vm.articles);
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
        $rootScope.$broadcast('feeditem', vm.articles);
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
        $rootScope.$broadcast('feeditem', vm.articles);
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

    (function getSubs(){
      $rootScope.$on('getsubscription', function (event) {
        getSubscription();
      });
    })();
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
