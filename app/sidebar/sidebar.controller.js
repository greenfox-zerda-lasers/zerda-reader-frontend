(function () {
  angular
    .module('zerdaReader')
    .controller('SidebarController', SidebarController);

  SidebarController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function SidebarController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.deleteSubscribe = deleteSubscribe;
    vm.getSubs = getSubs;
    vm.getAll = getAll;
    vm.getFav = getFav;
    vm.getFeed = getFeed;

    function getSubs(){
      APIFactory.getData('subscription').then(function(data) {
        vm.subscriptions = data.data;
      }, function(errResponse) {
        console.error('Error occurred')
      });
    }

    function getAll(){
      APIFactory.getData('feed').then(function(data) {
        vm.articles = data.data.feed;
        $rootScope.$broadcast('feeditem', vm.articles);
      }, function(errResponse) {
        console.error('Error occurred');
      });
    }

    function getFav() {
      APIFactory.getData('favorites').then(function (data) {
        vm.articles = data.data;
        $rootScope.$broadcast('feeditem', vm.articles);
      }).catch(function (data) {
        console.log('error');
      });
    }

    function getFeed($index, id) {
      vm.clickitem($index);
      var id = 43673;
      APIFactory.getData('feed/'+id).then(function (data) {
        vm.articles = (data.data);
        $rootScope.$broadcast('feeditem', vm.articles);
      }).catch(function (data) {
        console.log('error');
      });
    };

    function deleteSubscribe(id) {
      APIFactory.deleteItem('subscribe/'+id).then(function (data) {
        vm.getSubs();
      }).catch(function (data) {
        console.log('error');
      })
    }

    (function () {
      $rootScope.$on('getsubscription', function (event) {
        getSubs();
      });
    })();

    vm.clickitem = function($index){
      vm.subscriptions.map( function ( folder ) {
        folder.active = false;
      });
      vm.subscriptions[ $index ].active = true;
    }

  }

})();
