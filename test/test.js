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

//Login controller

describe('login', function () {

  var $loginController, httpBackend;

	beforeEach(angular.mock.module('loginController'));


	beforeEach(angular.mock.inject(function(_$controller_){
	  $loginController = _$controller_;
	}));

	describe('post', function () {
    it('Test AJAX call', function () {
      httpBackend.expect('POST', 'http://localhost:3000/user/login', {email: 'alma@alma.com', password: 'alma'}, { withCredentials: true})
      .respond(200, 'success');
      service.login();
      httpBackend.flush();
    });
	});

});
