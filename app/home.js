module.exports = angular.module('HomeController', ['ngRoute', 'ngAnimate']).controller('HomeController', ['$scope', '$http', '$location', function ($scope, $http, $location) {


  $scope.checkToken = function ($routeProvider){
    if (localStorage.length === 0){
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


  $scope.makevisible = function(){
    if($scope.visible == "visible"){
      $scope.visible = "hidden";
    } else {
      $scope.visible = "visible";
    }
  }

  $scope.clickitem = function($index){
    $scope.folders.map( function ( folder ) {
      folder.active = false;
    });
    $scope.folders[ $index ].active = true;
  }

  $http.get("data/data.json").then(function(data){
    $scope.folders = data.data;
  }, function(data){
    console.log("error");
  });




}]);

//module.exports = HomeController;
