module.exports = angular.module('SignUpController', ['ngRoute', 'ngAnimate']).controller('SignUpController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

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
          localStorage.setItem("token", respond.token);
          $location.path('/home');          
        } else {
          alert(respond.message);
        }
      }).catch(function (data) {
        console.log('error');
      })
    }
  }

}]);
