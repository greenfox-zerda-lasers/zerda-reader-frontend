'use strict'

describe('Sample tests', function () {
  it('has a dummy spec to test 2 + 2', function () {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect (2 + 2).toEqual(4);
  });
});

//--------------------------------------------------------------------------------------------------------------------------
describe('Login controller', function() {

  var httpBackend, LoginController;

  beforeEach(function () {
    module('zerdaReader');

    inject(function ($controller, $httpBackend) {
      httpBackend = $httpBackend;
      LoginController = $controller('LoginController');
    })
  })
  //
  // describe('message', function () {
  //   it('should be exposed', function() {
  //     expect(LoginController.message).toBeDefined();
  //   })
  //   it('should greet', function() {
  //     expect(LoginController.message).toEqual('hi from angular');
  //   })
  //   it('cica should not be exposed', function() {
  //     expect(LoginController.cica).not.toBeDefined();
  //   })
  // })
  //
  describe('login', function () {
    it('should be defined', function() {
      expect(LoginController.login).toBeDefined();
    });

    
  })
  //
  //   it('should send request', function() {
  //     httpBackend
  //       .when('POST', '/lobab/login')
  //       .respond(200, { foo: 'bar' });
  //
  //     LoginController.postLogin()
  //     httpBackend.flush()
  //     httpBackend.expectPOST('/lobab/login');
  //   })
  //
  //   it('should log in user', function() {
  //     httpBackend
  //       .when('POST', '/lobab/login')
  //       .respond(200, { foo: 'bar' });
  //
  //     LoginController.postLogin()
  //     httpBackend.flush()
  //     expect(LoginController.isLoggedIn).toBe(true);
  //   })
  //
  //   it('should process response', function() {
  //     httpBackend
  //       .when('POST', '/lobab/login')
  //       .respond(200, { foo: 'bar' });
  //
  //     LoginController.postLogin()
  //     httpBackend.flush()
  //     expect(LoginController.loginData).toEqual({ foo: 'bar' });
  //   })
  // })
});
