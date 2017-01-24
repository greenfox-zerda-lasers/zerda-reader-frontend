require('./lib/angular.min.js');
require('./lib/angular-route.min.js');
require('./lib/angular-animate.min.js');
// require('../content/css/index.scss');
require('../node_modules/semantic-ui/dist/semantic.min.css');
require('../content/css/login.scss');
require('../content/css/home.scss');

var zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngAnimate']);

zerdaReader.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      // controller: 'ReaderController',
      controller: 'LoginController',
    })
    .when('/signup', {
      templateUrl: 'views/registration.html',
      controller: 'SignUpController',
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'ReaderController',
    }).otherwise({
      redirectTo: '/login',
    });
}]);

zerdaReader.controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.login = function() {
    if ($scope.user.email !== '' && $scope.user.password !== '') {
      $http({
        method: 'POST',
        data: {
          email: $scope.user.email,
          password: $scope.user.password,
        },
        url: 'http://localhost:3000/user/login',
      }).then(function (data) {
        var respond = (data.data);
        if (respond.result === 'success') {
          $location.path('/home');
        }
      }).catch(function (data) {
        console.log('error');
      });
    }
  };
  $scope.singUpView = function () {
    $location.path('/signup');
  };
}]);

zerdaReader.controller('SignUpController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.signUp = function() {
    if ($scope.user.email !== '' && $scope.user.password !== '') {
      $http({
        method: 'POST',
        data: {
          email: $scope.user.email,
          password: $scope.user.password,
        },
        url: 'http://localhost:3000/user/signup',
      }).then(function (data) {
        let respond = (data.data);
        if (respond.result === 'success') {
          $location.path('/home');
        }
      }).catch(function (data) {
        console.log('error');
      })
    }
  }

  $scope.logout = function(){
    $location.path( "/login" );
  }


}]);

// $('#add')
// .popup({
//   popup: $('#addpopup'),
//   on: 'click'
// });
