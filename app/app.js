require('./lib/angular.min.js');
require('./lib/angular-route.min.js');
require('./lib/angular-animate.min.js');
// require('../content/css/index.scss');
//require('../node_modules/semantic-ui/dist/components/icon.css');
require('../node_modules/semantic-ui/dist/semantic.min.css');
require('../node_modules/semantic-ui/dist/components/accordion.css');
require('../node_modules/semantic-ui/dist/components/popup.css');
//require('../node_modules/semantic-ui/dist/semantic.js');

require('../content/css/login.scss');
require('../content/css/home.scss');

var zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngAnimate']);

zerdaReader.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'ReaderController',
    })
    .when('/register', {
      templateUrl: 'views/registration.html',
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'ReaderController',
    }).otherwise({
      redirectTo: '/login',
    });
}]);

zerdaReader.controller('ReaderController', ['$scope', '$http', '$location', function($scope, $http, $location){

  $scope.login = function() {
    if ( $scope.user.email !== "" && $scope.user.password !== ""){
      $http({
        method: 'POST',
        data: {
          email: $scope.user.email,
          password: $scope.user.password
        },
        url: 'http://localhost:3000/user/login'
      }).then(function(data){
        var respond = (data.data);
        if (respond.result === 'success') {
          $location.path('/home');
        }
      }).catch(function(data){
        console.log('error');
      })
    }
  }

  $scope.signup = function(){
    $location.path( "/register" );
  }

  $scope.logout = function(){
    $location.path( "/login" );
  }

  $scope.makevisible = function(){
    if($scope.visible == "visible"){
      $scope.visible = "hidden";
    } else {
      $scope.visible = "visible";
    }
  }
}]);
