module.exports = angular.module('HomeController', ['ngRoute', 'ngAnimate']).controller('HomeController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.checkToken = function ($routeProvider){
    if (localStorage.length === 0) {
      $location.path('/login');
    };
  };

  $scope.checkToken();

  $scope.logout = function(){
    localStorage.clear();
    $location.path( "/login" );
  }

  $scope.makevisible = function(){
    if($scope.visible == "visible"){
      $scope.visible = "hidden";
    } else {
      $scope.visible = "visible";
    }
  }

  $scope.makeActive = function($index) {
    if ($scope.articles[$index].active === true) {
      $scope.articles[$index].active = false;
    } else {
      $scope.articles.map( function (article){
        article.active = false
      });
      $scope.articles[$index].active = true;
    }
  }

  $scope.clickitem = function($index){
    $scope.subscriptions.map( function ( folder ) {
      folder.active = false;
    });
    $scope.subscriptions[ $index ].active = true;
  }

  $scope.getSubscription = function () {
    $http({
      method: 'GET',
      url: 'https://zerda-reader-mockback.gomix.me/subscription',
    }).then(function (data) {
      $scope.subscriptions = data.data;

    }).catch(function (data) {
      console.log('error');
    });
  };

  $scope.getFeed = function () {
    $http({
      method: 'GET',
      url: 'https://zerda-reader-mockback.gomix.me/feed/43673',
    }).then(function (data) {
      $scope.articles = (data.data);

    }).catch(function (data) {
      console.log('error');
    });
  };

  $scope.getSubscription();
  $scope.getFeed();

  $scope.addSubscribe = function() {
      if ($scope.newRss !== '') {
        $http({
          method: 'POST',
          data: {
            feed: $scope.newRss
          },
          url: 'https://zerda-reader-mockback.gomix.me/subscribe',
        }).catch(function (data) {
          console.log('error');
        })
      }
      $scope.newRss = '';
    //   location.reload();
    };
}]);

//module.exports = HomeController;
