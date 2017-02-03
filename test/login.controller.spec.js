'use strict'

describe('Sample tests', function () {
  it('has a dummy spec to test 2 + 2', function () {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect (2 + 2).toEqual(4);
  });
});

//--------------------------------------------------------------------------------------------------------------------------
describe('Login controller', function() {

  var httpBackend
  var LoginController


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
=======

    });
  });

>>>>>>> c9e2936d8b291a80b561bcb2130cd23fa581ad49:test/login.controller.spec.js
  describe('login', function () {
    it('should be defined', function() {
      expect(LoginController.login).toBeDefined();
    });

<<<<<<< HEAD:test/test.js

  })
  //
    it('should send request', function() {
      httpBackend
        .when('POST', 'https://zerda-reader-mockback.gomix.me/user/login')
        .respond(200, { foo: 'bar' });

      httpBackend.expectPOST('/lobab/login');
      LoginController.postLogin()
      httpBackend.flush()
    })

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
=======
    it('should send request', function () {
      LoginController.email = 'gabor@reader.com';
      LoginController.password = 'gabor';
      httpBackend
      .when('POST', 'https://zerda-reader-mockback.gomix.me/user/login')
      .respond(200, { result: 'success', token: '0-9A-Z', id: 1 });
      LoginController.login();
      httpBackend.flush();
      expect(LoginController.respond).toEqual({ result: 'success', token: '0-9A-Z', id: 1 });
    });

    it('should send request', function () {
      LoginController.email = 'ga@reader.com';
      LoginController.password = 'ga';
      httpBackend
      .when('POST', 'https://zerda-reader-mockback.gomix.me/user/login')
      .respond(200, { result: 'fail', message: 'invalid username or password' });
      LoginController.login();
      httpBackend.flush();
      expect(LoginController.respond).toEqual({ result: 'fail', message: 'invalid username or password'});
    });

    it('should send request', function () {
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
>>>>>>> c9e2936d8b291a80b561bcb2130cd23fa581ad49:test/login.controller.spec.js
});
