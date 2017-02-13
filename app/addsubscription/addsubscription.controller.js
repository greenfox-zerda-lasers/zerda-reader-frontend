(function () {
  angular
    .module('zerdaReader')
    .controller('SubscribeController', SubscribeController);

  SubscribeController.$inject = ['$scope', '$location', '$rootScope', '$http', '$window', 'APIFactory'];

  function SubscribeController($scope, $location, $rootScope, $http, $window, APIFactory) {
    const vm = this;
    vm.addSubscribe = addSubscribe;
    vm.makeVisible = makeVisible;
    vm.visible = 'hidden';
    vm.newRss = '';

    function makeVisible() {
      if (event.target.id === 'add') {
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
      $scope.$apply();
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
