module.exports = angular.module('HomeController', ['ngRoute', 'ngAnimate'])
  .controller('HomeController', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {

  $scope.checkToken = function ($routeProvider){
    if (localStorage.length === 0) {
      $location.path('/login');
    };
  };

  $scope.checkToken();

  // $scope.logout = function(){
  //   localStorage.clear();
  //   $location.path( "/login" );
  // }

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
    $scope.subscriptions = '';
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
      $scope.articles = data.data;
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
    $http({
      method: 'GET',
      url: 'https://zerda-reader-mockback.gomix.me/feed/43675'
    }).then(function (data) {
      $scope.articles = (data.data);
    }).catch(function (data) {
      console.log('error');
    });
  };

  $scope.getSubscription();

  $scope.favoriteHandling = function (id, favorite){
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

  $scope.addSubscribe = function() {

    if ($scope.newRss !== '') {
      $http({
        method: 'POST',
        data: {
          feed: $scope.newRss
        },
        url: 'https://zerda-reader-mockback.gomix.me/subscribe',
      }).then ( function(data){
        $scope.getSubscription();
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
    }).then ( function(data){
      $scope.getSubscription();
    }).catch(function (data) {
      console.log('error');
    })
  }

  // $scope.writeTime = function(time) {
  //
  // }

}]);

//module.exports = HomeController;
