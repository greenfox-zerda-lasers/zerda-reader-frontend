'use strict'

// SOME dummy test
describe('example test', function() {
  it('should be true', function() {
    expect('foo').toBe('foo');
  });
});

describe('Sample tests', function () {
  it('has a dummy spec to test 2 + 2', function () {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect (2 + 2).toEqual(4);
  });
});


var calculator = {
	sum: function (x, y) {
		return x + y;
	},
	subtract: function (x, y) {
		return x - y;
	},
	divide: function (x, y) {
		return (y === 0) ? 0 : x / y;
	}
}

describe('calculator', function () {

	describe('sum', function () {
		it('1 + 1 should equal 2', function () {
			expect(calculator.sum(1, 1)).toBe(2);
		});
	});

	describe('subtract', function () {
		it('3 - 2 should equal 1', function () {
			expect(calculator.subtract(3, 2)).toBe(1);
		});
	});

	describe('divide', function () {
		it('10 / 5 should equal 2', function () {
			expect(calculator.divide(10, 5)).toBe(2);
		});

		it('zero divisor should equal 0', function () {
			expect(calculator.divide(10, 0)).toBe(0);
		});
	});
});


//--------------------------------------------------------------------------------------------------------------------------

//Login controller by http://stackoverflow.com/questions/29690389/unit-test-for-login-with-jasmine-and-karma

// describe('Controller: LoginController', function() {
//   var LoginController, $httpBackend, $rootScope, $location,  $scope;
//   beforeEach(module('zerdaReader'));
//
//   beforeEach(inject(function($injector) {
//     $httpBackend=$injector.get('$httpBackend');
//     $rootScope=$injector.get('$rootScope');
//     $controller=$injector.get('$controller');
//     $location=$injector.get('$location');
//
//
//     LoginController=function() {
//       return $controller('LoginController', {
//         '$scope': $rootScope,
//         '$location': $location
//       });
//     };
//   }));
//
//   //This is success
//   it('should have a LoginController controller', function() {
//     expect('zerdaReader.LoginController').toBeDefined();
//   });
//
//   // You have to think about what you want to test here. There is no logic in your controller
//   // that matches what you test here. To activate test just remove the x from xit.
//   // xit('should store username and password into cookies', function() {
//   //   var $scope={};
//   //   var loginCtrl=LoginCtrl();
//   //   $rootScope.username='testUser';
//   //   expect($cookieStore.get('username')).toBe('testUser');
//   // });
//
//   // Failure
//   it('should logs a user in and redirect', function() {
//     var loginCtrl=LoginController();
//
//     $httpBackend.whenPOST('/user/login').respond(200);
//     $rootScope.user.email = 'bogi@reader.com';
//     $rootScope.user.password = 'bogi';
//     $rootScope.login();
//
//     $httpBackend.flush();
//     $rootScope.$digest();
//     expect($location.path()).toBe('/home'); // --> error: location is not defined
//     //expect($cookieStore.get('username')).toBe('testUser');
//   });
// });

//------------------------------------------------------------------------------------------------------------------------

//
// describe('Service: LoginController', function () {
//
//   var $loginController, $httpBackend;
//
// 	beforeEach(module('LoginController'));
//
//
// 	beforeEach(inject(function(_$httpBackend_, _loginController_){
// 	  $loginController = _logincontroller_;
//     $httpBackend = _$httpBackend_;
// 	}));
//
//
//   it('should POST login data', function () {
//
//     $httpBackend.expectPOST('/user/login', {email: "bogi@reader.com", password: "bogi"}).respond(200, '');
//
//     loginController.login({email: "bogi@reader.com", password: "bogi"});
//
//     $httpBackend.flush();
//
//   });

	// describe('post', function () {
  //
  //   var $scope = {};
  //
  //   /* Code Under Test */
  //   $http.post('http://localhost:3000/user/login', {
  //       username: 'bogi@reader.com',
  //       password: 'bogi'
  //     })
  //     .success(function(data, status, headers, config) {
  //       $scope.user = data;
  //     });
  //   /* End Code */
  //
  //
  //   $httpBackend
  //     .when('POST', 'http://localhost:3000/user/login', {
  //       username: 'bogi@reader.com',
  //       password: 'bogi'
  //     })
  //     .respond({
  //       username: 'bogi@reader.com'
  //     });
  //
  //
  //   $httpBackend.flush();
  //
  //   expect($scope.user).toEqual({ username: 'bogi' });
  //
  // });


// });
