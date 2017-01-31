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
        url: 'http://localhost:3000/user/login',
      }).then(function (data) {
        console.log(data);
        var respond = (data.data);

        if(respond.result === 'success') {
          // console.log(respond.token);
          // console.log(respond);
          localStorage.setItem("token", respond.token);
          // console.log(localStorage);
          $location.path('/home');
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
