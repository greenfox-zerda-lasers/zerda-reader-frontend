require('./lib/angular.min.js');
require('./lib/angular-route.min.js');
require('./lib/angular-animate.min.js');
require('../content/css/login.scss');
// require('../content/css/index.scss');
// require('../node_modules/semantic-ui/dist/semantic.min.css');

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

zerdaReader.controller('ReaderController', ['$scope', '$http', function($scope, $http){

  $scope.message = 'valami'
  $scope.login = function() {
    console.log($scope)
  //   $http({
  //     method: 'POST',
  //     url: '/user/login'
  //   }).then(function(data){
  //     if (data){
  //       console.log('very good');
  //     } else {
  //       console.log('error');
  //     }
  //   })
  //  });
  };
}]);
