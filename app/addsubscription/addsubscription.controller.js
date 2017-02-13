(function () {
  angular
    .module('zerdaReader')
    .controller('SubscribeController', SubscribeController);

  SubscribeController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function SubscribeController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.addSubscribe = addSubscribe;
    vm.makeVisible = makeVisible;
    vm.visible = 'hidden';

    function makeVisible() {
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


    })

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
          //console.log(el);
      }
      return retval;
  }
})();






// http://stackoverflow.com/questions/14234560/javascript-how-to-get-parent-element-by-selector
