(function () {
  const zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngResource', 'infinite-scroll']);

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
        controllerAs: 'homeCtrl',
      }).otherwise({
        redirectTo: '/login',
      });
  }]);
})();
