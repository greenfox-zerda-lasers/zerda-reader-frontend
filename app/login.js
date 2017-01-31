module.exports = angular.module('LoginController', ['ngRoute', 'ngAnimate']).controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.token={}
  $scope.login = function() {

    if($scope.user.email == "" && $scope.user.password == ""){
      console.log('Both fields are empty');
    }else if($scope.user.email !== "" && $scope.user.password !== "") {
      $http({
        method: 'POST',
        data: {
          email: $scope.user.email,
          password: $scope.user.password,
        },
        url: 'https://zerda-reader-mockback.gomix.me/user/login',
      }).then(function (data) {
        console.log(data);
        var respond = (data.data);

        if(respond.result === 'success') {
          // console.log(respond.token);
          localStorage.setItem("token", respond.token);
          // console.log(localStorage);
          $location.path('/home');
      } else if (respond.result === 'fail') {
          console.log(respond.message);
          $scope.errorMessage = 'Wrong username or password. Try again.';
          $scope.user.email = "";
          $scope.user.password = "";
      }
      }).catch(function (data) {
        console.log('error');
      });
    }
  };
  $scope.signUpView = function () {
    $location.path('/signup');
  };
}]);


// LoginController;
