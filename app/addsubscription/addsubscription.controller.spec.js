'use strict'

describe('SubscribeController controller', function () {
  var httpBackend
  var SubscribeController
  var compile
  var element
  var popup
  var compiled
  var compiledPopup

  beforeEach(function () {
    module('zerdaReader');

    inject(function ($controller, $httpBackend, $compile) {
      httpBackend = $httpBackend;
      SubscribeController = $controller('SubscribeController');
      compile = $compile;
      element = angular.element('<div id="add" class="ui button" ng-click="subsCtrl.makeVisible()"Add subscription</div>');
      popup = angular.element('<div id="addpopup" class="ui flowing popup top left transition {{subsCtrl.visible}}" ng-click="subsCtrl.makeVisible()"></div>')
      compiled = $compile(element);
      compiledPopup = $compile(popup);
    });
  });


  describe('addSubscribe', function () {

    it('should be defined', function() {
      expect(SubscribeController.addSubscribe).toBeDefined();
    });

  })

  describe('makeVisible', function () {

    it('should toggle class visible by click', function() {
      element.click();
      expect(compiledPopup.hasClass('visible')).toBe(true);
    });

  })
})
