'use strict'

describe('SubscribeController controller', function () {
  var SubscribeController;
  var compile;
  var scope;
  var rootscope;
  var element;
  var compiledElement;
  var addButton;
  var httpBackend;

  beforeEach(function () {
    module('zerdaReader', 'templates');

    inject(function ($controller, $httpBackend, _$compile_, _$rootScope_, $templateCache) {
      httpBackend = $httpBackend;
      compile = _$compile_;
      rootscope = _$rootScope_;
      scope = rootscope.$new();
      SubscribeController = $controller('SubscribeController', {$scope: scope});
      // console.log('cache',$templateCache.get('app/addsubscription/addsubscription.html'));
      element = $templateCache.get('app/addsubscription/addsubscription.html');
      compiledElement = compile(element)(rootscope);
      scope.$digest();
      // rootscope.visible = 'hidden';
    });
  });


  describe('addSubscribe', function () {

    it('should be defined', function() {
      expect(SubscribeController.addSubscribe).toBeDefined();
    });

  })

  describe('makeVisible', function () {

    it('should toggle class visible on click', function() {
      addButton = compiledElement[0].querySelector('.ui.button');
      var popup = compiledElement[0].querySelector('.popup');
      console.log(addButton, 'addBUTTON')
      console.log(popup, 'POPUP')
      addButton.click();
      expect(popup.classList.contains('visible')).toBe(true);
      addButton.click();
      expect(popup.classList.contains('visible')).toBe(false);

    });

  })
})
