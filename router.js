(function () {
<<<<<<< HEAD
  const zerdaReader = angular.module('zerdaReader', ['ngRoute']);
=======
  const zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngAnimate', 'ngResource', 'infinite-scroll']);
>>>>>>> bf59afedc777e4a4d71cf1e9398d8ec365ad10a0

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
