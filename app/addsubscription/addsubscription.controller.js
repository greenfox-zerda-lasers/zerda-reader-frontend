(function () {
  angular
    .module('zerdaReader')
    .controller('SubscribeController', SubscribeController);

  SubscribeController.$inject = ['$location', '$rootScope', '$http'];

  function SubscribeController($location, $rootScope, $http) {
    let vm = this;
    vm.makeVisible = makeVisible;


    function makeVisible(){
      if(vm.visible == "visible"){
        vm.visible = "hidden";
      } else {
        vm.visible = "visible";
      }
    }
  }
})()

// $scope.addSubscribe = function() {
//
//   if ($scope.newRss !== '') {
//     $http({
//       method: 'POST',
//       data: {
//         feed: $scope.newRss
//       },
//       url: 'https://zerda-reader-mockback.gomix.me/subscribe',
//     }).then ( function(data){
//       $scope.getSubscription();
//     }).catch(function (data) {
//       console.log('error');
//     })
//   }
//   $scope.newRss = '';
// //   location.reload();
// };
//
