module.exports = angular.module('HomeController', ['ngRoute', 'ngAnimate']).controller('HomeController', ['$scope', '$http', '$location', function ($scope, $http, $location) {


  $scope.checkToken = function ($routeProvider){
    if (localStorage.length === 0) {
      $location.path('/login');
    };
  };

  $scope.checkToken();

  $scope.logout = function(){
    //console.log(localStorage);
    localStorage.clear();
    //console.log(localStorage);
    $location.path( "/login" );
  }
  // $scope.itemClicked = function ($index) {
  //   $scope.menu.child[$scope.current].active == '';
  //   console.log($index);
  //   $scope.current = $index;
  //   $scope.menu.child[$scope.current].active == 'active';
  // };
  //
  // $scope.changeactive = function () {
  //   $scope.menu[$scope.current].active == ''
  //   $scope.menu[$scope.current].active == 'active';
  // }
  //
  // console.log($scope.menu.length);
  // console.log($scope.menu[$scope.current]);

  $scope.makevisible = function(){
    if($scope.visible == "visible"){
      $scope.visible = "hidden";
    } else {
      $scope.visible = "visible";
    }
  }

  $scope.clickitem = function($index){
    $scope.selected = $index;
    //console.log($scope.selected);
  }


  $scope.menu = document.querySelectorAll('.ui.secondary.vertical.pointing.menu');
  //console.log($scope.menu)

  // $scope.current = 0;
  // console.log($scope.current);
  // console.log($scope.menu[0]);
  // console.log($scope.menu[0].children);
  //console.log($scope.menu[0].children[0]);
  //$scope.menu[0].children[$scope.current].active = "active";

  $scope.getSubscription = function () {
    console.log(localStorage)
    $http({
      method: 'GET',
      url: 'http://localhost:3000/subscriptions',
    }).then(function (data) {
      $scope.subscriptions = (data.data);

    }).catch(function (data) {
      console.log('error');
    });
  };

  $scope.getFeed = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:3000/feed/43673',
    }).then(function (data) {
      $scope.articles = (data.data);

    }).catch(function (data) {
      console.log('error');
    });
  };

  $scope.getSubscription();
  $scope.getFeed();

}]);

//module.exports = HomeController;
