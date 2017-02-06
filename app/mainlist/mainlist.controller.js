(function () {
  angular
    .module('zerdaReader')
    .controller('MainlistController', MainlistController);

  MainlistController.$inject = ['$location', '$rootScope', '$http'];

  function MainlistController($location, $rootScope, $http) {
    let vm = this;
    vm.makeActive = makeActive;
    vm.favoriteHandling = favoriteHandling;

    function makeActive($index) {
      if (vm.articles[$index].active === true) {
        vm.articles[$index].active = false;
      } else {
        vm.articles.map( function (article){
          article.active = false
        });
        vm.articles[$index].active = true;
      }
    }

    function favoriteHandling(id, favorite){
      $http({
        method: 'PUT',
        data: {
          item_id: id
        },
        url: 'https://zerda-reader-mockback.gomix.me/favorites',
      }).then(function (data) {

      }).catch(function (data) {
        console.log('error');
      });
    };
  }
})()
