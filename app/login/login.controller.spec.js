'use strict';

describe('Sample tests', function () {
  it('has a dummy spec to test 2 + 2', function () {
    expect (2 + 2).toEqual(4);
  });
});

//----------------------------------------------------------------------------------------------
describe('Login controller', function () {
  let httpBackend
  let LoginController

  beforeEach(function () {
    module('zerdaReader');

    inject(function ($controller, $httpBackend) {
      httpBackend = $httpBackend;
      LoginController = $controller('LoginController');
    });
  });


  describe('login', function () {
    it('should be defined', function () {
      expect(LoginController.login).toBeDefined();
    });

    it('login with existed email', function () {
      LoginController.email = 'gabor@reader.com';
      LoginController.password = 'gabor';
      httpBackend
      .when('POST', 'https://murmuring-everglades-41117.herokuapp.com/user/login')
      .respond(200, { result: 'success', token: '0-9A-Z', id: 1 });
      LoginController.login();
      httpBackend.flush();
      expect(LoginController.respond).toEqual({ result: 'success', token: '0-9A-Z', id: 1 });
    });

    it('login with wrong email', function () {
      LoginController.email = 'ga@reader.com';
      LoginController.password = 'ga';
      httpBackend
      .when('POST', 'https://murmuring-everglades-41117.herokuapp.com/user/login')
      .respond(200, { result: 'fail', message: 'invalid username or password' });
      LoginController.login();
      httpBackend.flush();
      expect(LoginController.respond).toEqual({ result: 'fail', message: 'invalid username or password' });
    });

    it('login with wrong email, check error message', function () {
      LoginController.email = 'ga@reader.com';
      LoginController.password = 'ga';
      httpBackend
      .when('POST', 'https://murmuring-everglades-41117.herokuapp.com/user/login')
      .respond(200, { result: 'fail', message: 'invalid username or password' });
      LoginController.login();
      httpBackend.flush();
      expect(LoginController.errMessage).toEqual('invalid username or password');
    });
  });
});
