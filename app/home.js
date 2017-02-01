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

  $scope.getAll = function () {
    $http({
      method: 'GET',
      url: 'https://zerda-reader-mockback.gomix.me/feed',
    }).then(function (data) {
      console.log('igen')
      console.log(data)
      $scope.articles = data.data.feed;

    }).catch(function (data) {
      console.log('error');
    });
  };

  $scope.getFav = function () {
    $http({
      method: 'GET',
      url: 'https://zerda-reader-mockback.gomix.me/favorites',
    }).then(function (data) {
      console.log('igen')
      console.log(data)
      $scope.articles = data.data.feed;

    }).catch(function (data) {
      console.log('error');
    });
  };

  $scope.clickitem = function($index){
    $scope.subscriptions.map( function ( folder ) {
      folder.active = false;
    });
    $scope.subscriptions[ $index ].active = true;
  }

  $scope.getFeed = function ($index, id) {
    // $scope.clickitem($index)
    // var feed_id = 43675;
    // id = feed_id;
    $http({
      method: 'GET',
      url: 'https://zerda-reader-mockback.gomix.me/feed/43675'
    }).then(function (data) {
      console.log(data);
      $scope.articles = (data.data);

    }).catch(function (data) {
      console.log('error');
    });
  };

  $scope.getSubscription();
  //$scope.getFeed();

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

  $scope.deleteSubscribe = function(id) {
    var feed_id = id;
    console.log(feed_id);
    $http({
      method: 'DELETE',
      url: 'https://zerda-reader-mockback.gomix.me/subscribe/'+feed_id
    }).catch(function (data) {
      console.log('error');
    })

  }

}]);

//module.exports = HomeController;
