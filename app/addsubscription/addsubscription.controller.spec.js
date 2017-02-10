'use strict'

describe('SubscribeController controller', function () {
  var httpBackend
  var SubscribeController
  var compile
  var element
  var popup
  var compiled
  var compiledPopup
  var compiledElement
  var scope
  var rootscope

  beforeEach(function () {
    module('zerdaReader');

    inject(function ($controller, $httpBackend, _$compile_, _$rootScope_) {
      httpBackend = $httpBackend;
      SubscribeController = $controller('SubscribeController');
      compile = _$compile_;
      rootscope = _$rootScope_;


    });
  });


  describe('addSubscribe', function () {

    it('should be defined', function() {
      expect(SubscribeController.addSubscribe).toBeDefined();
    });

  })

  describe('makeVisible', function () {

    it('should toggle class visible by click', function() {
      element = angular.element('<div id="addpopup" class="ui flowing popup top left transition {{subsCtrl.visible}}" ng-click="subsCtrl.makeVisible()"></div>');
      console.log(element);
      //console.log(rootscope);
      compiledElement = compile(element)(rootscope);
      console.log(compiledElement);
      rootscope.$apply();
      var popup = compiledElement.find('.popup');
      console.log(popup);
      popup.triggerHandler('click');
      expect(popup.hasClass('visible')).toBe(true);
    });

  })
})
