require('./lib/angular.min.js');
require('./lib/angular-route.min.js');
require('./lib/angular-animate.min.js');
require('./lib/angular-mocks.js');
var LoginController = require('./login.js');
var HomeController = require('./signup.js');
var SignUpController = require('./home.js');
// require('../content/css/index.scss');
require('../node_modules/semantic-ui/dist/semantic.min.css');
require('../node_modules/semantic-ui/dist/components/accordion.css');
require('../node_modules/semantic-ui/dist/components/popup.css');
//require('../node_modules/semantic-ui/dist/semantic.js');
require('../content/css/login.scss');
require('../content/css/home.scss');

var zerdaReader = angular.module('zerdaReader', ['ngRoute', 'ngAnimate', 'LoginController', 'HomeController', 'SignUpController']);

zerdaReader.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
    })
    .when('/signup', {
      templateUrl: 'views/registration.html',
      controller: 'SignUpController',
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController',
    }).otherwise({
      redirectTo: '/login',
    });
}]);
