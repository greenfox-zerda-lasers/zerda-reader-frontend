require('./lib/angular.min.js');
require('./lib/angular-route.min.js');
require('./lib/angular-animate.min.js');
// require('../content/css/index.scss');
//require('../node_modules/semantic-ui/dist/components/icon.css');
require('../node_modules/semantic-ui/dist/semantic.min.css');
//require('../node_modules/semantic-ui/dist/semantic.min.js');
require('../content/css/login.scss');

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
      // controller: 'ReaderController',
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
}]);
