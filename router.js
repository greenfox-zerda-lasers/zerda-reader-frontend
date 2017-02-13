(function () {
<<<<<<< HEAD
  const zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngResource']);
=======
  const zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngAnimate', 'ngResource', 'infinite-scroll']);
>>>>>>> 149023bdc24c56b1ec47e45f272e01d141d07d10

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
