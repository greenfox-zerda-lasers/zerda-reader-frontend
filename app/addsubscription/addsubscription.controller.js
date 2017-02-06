(function () {
  angular
    .module('zerdaReader')
    .controller('SubscribeController', SubscribeController);

  SubscribeController.$inject = ['$location', '$rootScope', '$http'];

  function SubscribeController($location, $rootScope, $http) {
    let vm = this;
    vm.addSubscribe = addSubscribe;
    vm.makeVisible = makeVisible;


    function makeVisible(){
      if(vm.visible == "visible"){
        vm.visible = "hidden";
      } else {
        vm.visible = "visible";
      }
    }
    function addSubscribe() {

      if (vm.newRss !== '') {
        $http({
          method: 'POST',
          data: {
            feed: vm.newRss
          },
          url: 'https://zerda-reader-mockback.gomix.me/subscribe',
        }).then ( function(data){
          $rootScope.$broadcast('getsubscription');
        }).catch(function (data) {
          console.log('error');
        })
      }
      vm.newRss = '';
    };
  }
})()
