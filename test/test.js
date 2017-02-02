'use strict'

describe('Sample tests', function () {
  it('has a dummy spec to test 2 + 2', function () {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect(2 + 2).toEqual(4);
  });
});

//--------------------------------------------------------------------------------------------------------------------------
describe('Login controller', function() {

  var httpBackend;
  var LoginController;

  beforeEach(function () {
    module('zerdaReader');

    inject(function ($controller, $httpBackend) {
      httpBackend = $httpBackend;
      LoginController = $controller('LoginController');

      httpBackend
      .when('POST', 'https://zerda-reader-mockback.gomix.me/user/login')
      .respond(200, { result: 'success', token: '0-9A-Z', id: 1 });
    });
  });

  describe('login', function () {
    it('should be defined', function() {
      expect(LoginController.login).toBeDefined();
    });

    it('should send request', function () {
      LoginController.email = 'gabor@reader.com';
      LoginController.password = 'gabor';
      LoginController.login();
      httpBackend.flush();
      // httpBackend.expectPOST('/user/login')
      expect(LoginController.respond).toEqual({ result: 'success', token: '0-9A-Z', id: 1 });
    });
  });
  //
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
