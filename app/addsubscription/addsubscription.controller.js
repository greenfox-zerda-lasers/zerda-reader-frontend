(function () {
  angular
    .module('zerdaReader')
    .controller('SubscribeController', SubscribeController);

  SubscribeController.$inject = ['$location', '$rootScope', '$scope', '$http', '$window', 'APIFactory', '$timeout'];

  function SubscribeController($scope, $location, $rootScope, $http, $window, APIFactory, $timeout) {
    const vm = this;
    vm.addSubscribe = addSubscribe;
    vm.makeVisible = makeVisible;
    vm.visible = 'hidden';
    vm.newRss = '';
    vm.open = false;

    function makeVisible() {
      if (event.target.id === 'add') {
        vm.open = !vm.open;
        if (vm.visible === 'visible') {
          vm.visible = 'hidden';
        } else {
          vm.visible = 'visible';
        }
      }
    }

    $window.addEventListener('click', function (event) {
      let el = event.target
      if (event.target.id !== 'add') {
        if (!closest(el, '#addpopup')) {
          vm.visible = 'hidden';
        }
      }
      // $scope.$apply();
      $timeout();
    });

    function addSubscribe() {
      if (vm.newRss !== '') {
        APIFactory.postRSS(vm.newRss).then(function (data) {
          $rootScope.$broadcast('getsubscription');
          vm.visible = 'hidden';
        }).catch(function (data) {
          console.error('Connection failed');
        });
      }
      vm.newRss = '';
    }
  }

  function closest(el, selector, stopSelector) {
    let retval = null;
    while (el) {
      if (el.matches(selector)) {
        retval = el;
        break;
      } else if (stopSelector && el.matches(stopSelector)) {
        break;
      }
      el = el.parentElement;
    }
    return retval;
  }
})();
