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
    vm.allActivated = true;


    function getSubs(){
      APIFactory.getData('subscription').then(function(data) {
        vm.subscriptions = data.data;
        vm.subs
      }, function(errResponse) {
        console.error('Error occurred')
      });
    }

    function getAll(){
      console.log(vm.allActivated);
      APIFactory.getData('feed').then(function(data) {
        vm.articles = data.data.feed;
        $rootScope.$broadcast('feeditem', vm.articles);
        vm.allActivated = true;
        vm.favActivated = false;
        vm.subscriptions.forEach( function ( folder ) {
          folder.active = false;
        });
        console.log(vm.allActivated);
      }, function(errResponse) {
        console.error('Error occurred');
      });
    }

    vm.getAll();

    function getFav() {
      APIFactory.getData('favorites').then(function (data) {
        vm.articles = data.data;
        $rootScope.$broadcast('feeditem', vm.articles);
        vm.allActivated = false;
        vm.favActivated = true;
        vm.subscriptions.forEach( function ( folder ) {
          folder.active = false;
        });
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
      vm.allActivated = false;
      vm.favActivated = false;
    }

  }

})();
