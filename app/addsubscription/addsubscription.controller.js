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

    function makeVisible() {
<<<<<<< HEAD
      if (vm.visible === 'hidden') {
        vm.visible = 'visible';
      } else {
        vm.visible = 'hidden';
      }
    }

    window.addEventListener('click', function(event){
        // console.log(event);
        // console.log(event.target);
        var el = event.target

        console.log(vm.visible);
        if (closest(el, '#addpopup')) {
          console.log("match");
          vm.visible = 'visible';
      } else {
          vm.visible = 'hide';
      }
        //   console.log(vm.visible);


=======
      console.log('make visi');
      if (event.target.id === 'add'){
        if (vm.visible === 'visible') {
          vm.visible = 'hidden';
        } else {
          vm.visible = 'visible';
        }
      }
    }

    $window.addEventListener('click', function (event) {
      var el = event.target
      if (event.target.id !== 'add') {
        if (!closest(el, "#addpopup")) {
          vm.visible = 'hidden';
        }
      }
      $scope.$apply()
>>>>>>> 149023bdc24c56b1ec47e45f272e01d141d07d10
    })

    function addSubscribe() {
      if (vm.newRss !== '') {
        APIFactory.postRSS(vm.newRss).then( function (data) {
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
      var retval = null;
      while (el) {
          if (el.matches(selector)) {
              retval = el;
              break
          } else if (stopSelector && el.matches(stopSelector)) {
              break
          }
          el = el.parentElement;
      }
      return retval;
  }
})();

// http://stackoverflow.com/questions/14234560/javascript-how-to-get-parent-element-by-selector
