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
    module('zerdaReader', 'templates');

    inject(function ($controller, $httpBackend, _$compile_, _$rootScope_, $templateCache) {
      httpBackend = $httpBackend;
      SubscribeController = $controller('SubscribeController');
      compile = _$compile_;
      rootscope = _$rootScope_;
      console.log('cache',$templateCache.get('app/addsubscription/addsubscription.html'));
      rootscope.visible = 'hidden';
    });
  });


  describe('addSubscribe', function () {

    it('should be defined', function() {
      expect(SubscribeController.addSubscribe).toBeDefined();
    });

  })

  describe('makeVisible', function () {

    it('should toggle class visible by click', function() {
      element = angular.element('<div id="add" class="ui button" ng-click="subsCtrl.makeVisible()">Add subscription<div id="addpopup" class="ui flowing popup top left transition {{subsCtrl.visible}}" ng-click="subsCtrl.makeVisible()"></div></div>');
      // console.log(element);
      //console.log(rootscope);
      compiledElement = compile(element)(rootscope);
      // console.log(compiledElement)
      // console.log(templates)
      // .triggerHandler('click');
      // console.log(popup);
      // popup.triggerHandler('click');
      // expect(compiledElement.hasClass('visible')).toBe(true);
    });

  })
})
