'use strict'

describe('Navbar controller', function () {
  var NavbarController;
  var compile;
  var scope;
  var rootscope;
  var element;
  var compiledElement;
  var logoutButton;
  var localStorage;
  var location;

  beforeEach(function () {
    module('zerdaReader', 'templates');

    inject(function ($controller, _$compile_, _$rootScope_, $templateCache, $location) {
      compile = _$compile_;
      rootscope = _$rootScope_;
      location = $location;
      scope = rootscope.$new();
      NavbarController = $controller('NavbarController');
      //console.log('cache',$templateCache.get('app/navbar/navbar.html'));
      element = $templateCache.get('app/navbar/navbar.html');
      compiledElement = compile(element)(rootscope);
      console.log(compiledElement);
      scope.$digest();
      localStorage = window.localStorage;
      console.log(localStorage)
    });
  });


  describe('logout', function () {
    it('should be defined', function () {
      expect(NavbarController.logout).toBeDefined();
    });

    it('should delete token', function() {
      logoutButton = compiledElement.find('a');
      console.log(logoutButton, 'button');
      logoutButton.triggerHandler('click');
      console.log(localStorage)
      expect(localStorage.token).toBe(undefined);
    })

    it('should change location', function() {
      logoutButton = compiledElement.find('a');
      logoutButton.triggerHandler('click');
      expect(location.$$path).toBe('/login');
      console.log(location.$$path)
    })
  })

});
