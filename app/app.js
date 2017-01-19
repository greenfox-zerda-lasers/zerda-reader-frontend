require('./lib/angular.min.js');
require('./lib/angular-route.min.js');
require('./lib/angular-animate.min.js');
require('../content/css/login.scss');
require('../content/css/index.scss');

var zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngAnimate']);

zerdaReader.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'ReaderController'
    })
    .when('/register', {
      templateUrl: 'views/registration.html'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'ReaderController'
    }).otherwise({
      redirectTo: '/login'
    });
}]);

zerdaReader.controller('ReaderController', ['$scope', function($scope){
  $scope.login = function() {

  };
}]);
