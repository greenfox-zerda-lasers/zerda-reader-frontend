'use strict';
(function () {
  angular
    .module('zerdaReader')
    .controller('SubscribeController', SubscribeController);

  SubscribeController.$inject = ['$location', '$rootScope', '$scope', '$http', '$window', 'APIFactory', '$timeout', 'loadingModal'];

  function SubscribeController($location, $rootScope, $scope, $http, $window, APIFactory, $timeout, loadingModal) {
    const vm = this;
    vm.addSubscribe = addSubscribe;
    vm.makePopupVisible = makePopupVisible;
    vm.popupVisible = 'hidden';
    vm.newFeed = '';
    vm.open = false;

    function addSubscribe() {
      if (vm.newFeed !== '') {
        loadingModal.showloadingModal(true);
        APIFactory.postNewFeed(vm.newFeed).then(function () {
          loadingModal.closeLoadingModal();
          $rootScope.$broadcast('getSubscription');
          vm.popupVisible = 'hidden';
        }).catch(function (errResponse) {
          loadingModal.closeLoadingModal();
          errorMessage.show(errResponse.status);
        });
      }
      vm.newFeed = '';
    }

    function makePopupVisible() {
      if (event.target.id === 'add-subscription-button') {
        vm.open = !vm.open;
        if (vm.popupVisible === 'visible') {
          vm.popupVisible = 'hidden';
        } else {
          vm.popupVisible = 'visible';
        }
      }
    }

    $window.addEventListener('click', function (event) {
      let el = event.target
      if (event.target.id !== 'add-subscription-button') {
        if (!closest(el, '#add-subscription-popup')) {
          vm.popupVisible = 'hidden';
        }
      }
      $timeout();
    });
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
