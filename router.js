(function () {
  var zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngAnimate', 'loginModule', 'HomeController']);

  zerdaReader.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl',
      })
      .when('/signup', {
        templateUrl: 'app/signup/signup.html',
        controller: 'SignUpController',
        controllerAs: 'signUpCtrl',
      })
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
      }).otherwise({
        redirectTo: '/login',
      });
  }]);
})();
