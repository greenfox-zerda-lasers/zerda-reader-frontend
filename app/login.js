module.exports = angular.module('LoginController', ['ngRoute', 'ngAnimate']).controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

  $scope.token={}

  $scope.login = function() {
    if (!$scope.email  && !$scope.password) {
        console.log("alert");
        alert("Please add your email and password");
   }

   else if($scope.email !== "" && $scope.password !== "") {
        console.log($scope.email);
        console.log($scope.password);
      $http({
        method: 'POST',
        data: {
          email: $scope.user.email,
          password: $scope.user.password,
        },
        url: 'http://localhost:3000/user/login',
      }).then(function (data) {
        var respond = (data.data);
        if(respond.result === 'success') {
          // console.log(respond.token);
          // console.log(respond);
          localStorage.setItem("token", respond.token);
          // console.log(localStorage);
          $location.path('/home');
      } else if (respond.result === 'fail') {
          console.log(respond.message);
          $scope.errorMessage = 'Wrong username or password. Try again.';
        //   $scope.user.email = "";
        //   $scope.user.password = "";
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
