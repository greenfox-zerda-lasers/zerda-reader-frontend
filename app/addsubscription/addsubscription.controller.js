(function () {
  angular
    .module('zerdaReader')
    .controller('SubscribeController', SubscribeController);

  SubscribeController.$inject = ['$location', '$rootScope', '$http', 'APIFactory'];

  function SubscribeController($location, $rootScope, $http, APIFactory) {
    const vm = this;
    vm.addSubscribe = addSubscribe;
    vm.makeVisible = makeVisible;
    //vm.visible = 'hidden';

    function makeVisible() {
      if (vm.visible === 'visible') {
        vm.visible = 'hidden';
      } else {
        vm.visible = 'visible';
      }
    }

    window.addEventListener('click', function (event) {
        // console.log(event);
        //console.log(event.target);

        var el = event.target
        //console.log(el.parentElement)

        console.log(vm.visible);
        if (closest(el, "#addpopup")) {
          //console.log("match");
          vm.visible = 'visible';
          console.log(vm.visible);
    //   } else if (closest(el, "#addpopup") && vm.visible == "visible"){
    //       console.log(vm.visible);
    //       vm.visible = 'hidden';
    //       console.log(vm.visible);
      }else {
          //console.log("nomatch");
          vm.visible = 'hidden';
        }
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
