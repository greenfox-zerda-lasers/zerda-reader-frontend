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
<<<<<<< HEAD
      compile = $compile;
      element = angular.element('<div id="add" class="ui button" ng-click="subsCtrl.makeVisible()"Add subscription</div>');
      popup = angular.element('<div id="addpopup" class="ui flowing popup top left transition {{subsCtrl.visible}}" ng-click="subsCtrl.makeVisible()"></div>')
      compiled = $compile(element);
      compiledPopup = $compile(popup);
=======
      compile = _$compile_;
      rootscope = _$rootScope_;


>>>>>>> f39b73e2448208e11547225fc8e58a3b67b7f763
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
      var popup = compiledElement.find('.popup');
      console.log(popup);
      popup.triggerHandler('click');
      expect(popup.hasClass('visible')).toBe(true);
    });

  })
})
