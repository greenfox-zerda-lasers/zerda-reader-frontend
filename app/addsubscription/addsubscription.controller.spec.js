'use strict'

describe('SubscribeController controller', function () {
  let SubscribeController;
  let compile;
  let scope;
  let rootscope;
  let element;
  let compiledElement;
  let addButton;
  let httpBackend;

  beforeEach(function () {
    module('zerdaReader', 'templates');

    inject(function ($controller, $httpBackend, _$compile_, _$rootScope_, $templateCache) {
      httpBackend = $httpBackend;
      compile = _$compile_;
      rootscope = _$rootScope_;
      scope = rootscope.$new();
      SubscribeController = $controller('SubscribeController', { $scope: scope });
      element = $templateCache.get('app/addsubscription/addsubscription.html');
      compiledElement = compile(element)(rootscope);
      scope.$digest();
    });
  });

  describe('addSubscribe', function () {
    it('should be defined', function () {
      expect(SubscribeController.addSubscribe).toBeDefined();
    });
  });

  describe('makeVisible', function () {
    it('should toggle class visible on click', function() {
      addButton = compiledElement[0].querySelector('.ui.button');
      var popup = compiledElement[0].querySelector('.popup');
      addButton.click();
      expect(popup.classList.contains('visible')).toBe(true);
      addButton.click();
      expect(popup.classList.contains('visible')).toBe(false);
    });
  });
});
