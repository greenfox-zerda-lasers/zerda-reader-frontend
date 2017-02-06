'use strict'

describe('Sample tests', function () {
  it('has a dummy spec to test 2 + 2', function () {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect (2 + 2).toEqual(4);
  });
});

//----------------------------------------------------------------------------------------------
describe('Login controller', function () {
  var httpBackend
  var LoginController

  beforeEach(function () {
    module('zerdaReader');

    inject(function ($controller, $httpBackend) {
      httpBackend = $httpBackend;
      LoginController = $controller('LoginController');

    });
  });


  describe('login', function () {

    it('should be defined', function() {
      expect(LoginController.login).toBeDefined();
    });

<<<<<<< HEAD:test/login.controller.spec.js
    it('should send request', function () {
=======
    it('login with existed email', function () {
>>>>>>> 030bbae035d0c53788dc4f43ca4005452c87b31c:app/login/login.controller.spec.js
      LoginController.email = 'gabor@reader.com';
      LoginController.password = 'gabor';
      httpBackend
      .when('POST', 'https://zerda-reader-mockback.gomix.me/user/login')
      .respond(200, { result: 'success', token: '0-9A-Z', id: 1 });
      LoginController.login();
      httpBackend.flush();
      expect(LoginController.respond).toEqual({ result: 'success', token: '0-9A-Z', id: 1 });
    });

    it('login with wrong email', function () {
      LoginController.email = 'ga@reader.com';
      LoginController.password = 'ga';
      httpBackend
      .when('POST', 'https://zerda-reader-mockback.gomix.me/user/login')
      .respond(200, { result: 'fail', message: 'invalid username or password' });
      LoginController.login();
      httpBackend.flush();
      expect(LoginController.respond).toEqual({ result: 'fail', message: 'invalid username or password' });
    });

    it('login with wrong email, check error message', function () {
      LoginController.email = 'ga@reader.com';
      LoginController.password = 'ga';
      httpBackend
      .when('POST', 'https://zerda-reader-mockback.gomix.me/user/login')
      .respond(200, { result: 'fail', message: 'invalid username or password' });
      LoginController.login();
      httpBackend.flush();
      expect(LoginController.errorMessage).toEqual('Wrong username or password. Try again.');
    });
  });
<<<<<<< HEAD:test/login.controller.spec.js

=======
>>>>>>> 030bbae035d0c53788dc4f43ca4005452c87b31c:app/login/login.controller.spec.js
});
