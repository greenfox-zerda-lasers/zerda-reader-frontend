'use strict';

describe('Sample tests', function () {
  it('has a dummy spec to test 2 + 2', function () {
    expect(2 + 2).toEqual(4);
  });
});

//----------------------------------------------------------------------------------------------
describe('Signup controller', function () {
  var httpBackend
  var SignUpController

  beforeEach(function () {
    module('zerdaReader');

    inject(function ($controller, $httpBackend) {
      httpBackend = $httpBackend;
      SignUpController = $controller('SignUpController');
    });
  });

  describe('signUp', function () {
    it('should be defined', function() {
      expect(SignUpController.signUp).toBeDefined();
    });

    it('registration succeeded', function () {
      SignUpController.email = 'lala@reader.com';
      SignUpController.password = 'lala';
      SignUpController.confirmPassword = 'lala';
      httpBackend
      .when('POST', 'https://murmuring-everglades-41117.herokuapp.com/user/signup')
      .respond(200, { result: 'success', token: '0-9A-Z' });
      SignUpController.signUp();
      httpBackend.flush();
      expect(SignUpController.respond).toEqual({ result: 'success', token: '0-9A-Z' });
    });

    it('existed email', function () {
      SignUpController.email = 'gabor@reader.com';
      SignUpController.password = 'gabor';
      SignUpController.confirmPassword = 'gabor';
      httpBackend
      .when('POST', 'https://murmuring-everglades-41117.herokuapp.com/user/signup')
      .respond(200, { result: 'fail', message: 'Email address already exists' });
      SignUpController.signUp();
      httpBackend.flush();
      expect(SignUpController.respond).toEqual({ result: 'fail', message: 'Email address already exists' });
    });

    it('existed email, respond message check', function () {
      SignUpController.email = 'ga@reader.com';
      SignUpController.password = 'ga';
      SignUpController.confirmPassword = 'ga';
      httpBackend
      .when('POST', 'https://murmuring-everglades-41117.herokuapp.com/user/signup')
      .respond(200, { result: 'fail', message: 'Email address already exists' });
      SignUpController.signUp();
      httpBackend.flush();
      expect(SignUpController.errMessage).toEqual(SignUpController.respond.message);
      expect(SignUpController.respond.message).toEqual('Email address already exists');
    });
  });
});
