'use strict';

describe('Navbar controller', function () {
  let NavbarController;
  let compile;
  let scope;
  let rootscope;
  let element;
  let compiledElement;
  let logoutButton;
  let localStorage;
  let location;

  beforeEach(function () {
    module('zerdaReader', 'templates');

    inject(function ($controller, _$compile_, _$rootScope_, $templateCache, $location) {
      compile = _$compile_;
      rootscope = _$rootScope_;
      location = $location;
      scope = rootscope.$new();
      NavbarController = $controller('NavbarController', { $scope: scope });
      element = $templateCache.get('app/navbar/navbar.html');
      compiledElement = compile(element)(rootscope);
      scope.$digest();
      localStorage = window.localStorage;
    });
  });

  describe('logout', function () {
    it('should be defined', function () {
      expect(NavbarController.logout).toBeDefined();
    });

    it('should delete token', function() {
      logoutButton = compiledElement.find('a');
      logoutButton.triggerHandler('click');
      expect(localStorage.token).toBe(undefined);
    });

    it('should change location', function() {
      logoutButton = compiledElement.find('a');
      logoutButton.triggerHandler('click');
      expect(location.$$path).toBe('/login');
    });
  });
});
