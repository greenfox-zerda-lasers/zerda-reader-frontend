(function () {
  angular
    .module('zerdaReader')
    .controller('SubscribeController', SubscribeController);

  SubscribeController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function SubscribeController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.addSubscribe = addSubscribe;
    vm.makeVisible = makeVisible;

    function makeVisible() {
        console.log(window);
      if (vm.visible === 'visible') {
        vm.visible = 'hidden';
      } else {
        vm.visible = 'visible';
      }
    }

    function addSubscribe() {
      if (vm.newRss !== '') {
        APIFactory.postRSS(vm.newRss).then( function (data) {
          $rootScope.$broadcast('getsubscription');
        }).catch(function (data) {
          console.error('Connection failed');
        });
      }
      vm.newRss = '';
    }
  }
})();



  // window.addEventListener('click', function(event){
  //     console.log(event);
  // })

// http://stackoverflow.com/questions/14234560/javascript-how-to-get-parent-element-by-selector
// preventDefault
//
// preventDefault()
