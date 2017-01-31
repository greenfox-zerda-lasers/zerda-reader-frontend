module.exports = angular.module('LoginController', ['ngRoute', 'ngAnimate']).controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.token = {};

  $scope.login = function () {
    if (!$scope.email && !$scope.password) {
        console.log('alert');
        $scope.errorMessage = 'Wrong username or password. Try again.';
    } else if ($scope.email !== '' && $scope.password !== '') {

      $http({
        method: 'POST',
        data: {
          email: $scope.email,
          password: $scope.password,
        },
        url: 'https://zerda-reader-mockback.gomix.me/user/login',
      }).then(function (data) {
        console.log(data);
        var respond = (data.data);
        if (respond.result === 'success') {
          localStorage.setItem('token', respond.token);
          $location.path('/home');
      } else if (respond.result === 'fail') {
          $scope.errorMessage = 'Wrong username or password. Try again.';

          $scope.email = '';
          $scope.password = '';
        }
      }).catch(function (data) {
        console.log(data);
      });
    }
  };
  $scope.signUpView = function () {
    $location.path('/signup');
  };
}]);


// LoginController;
