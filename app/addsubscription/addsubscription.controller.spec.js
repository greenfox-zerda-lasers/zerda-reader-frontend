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

  beforeEach(function () {
    module('zerdaReader');

    inject(function ($controller, $httpBackend, $compile, $rootScope) {
      httpBackend = $httpBackend;
      SubscribeController = $controller('SubscribeController');
      compile = $compile;
      scope = $rootScope;


    });
  });


  describe('addSubscribe', function () {

    it('should be defined', function() {
      expect(SubscribeController.addSubscribe).toBeDefined();
    });

  })

  describe('makeVisible', function () {

    it('should toggle class visible by click', function($compile, scope) {
      element = angular.element('<div id="add" class="ui button" ng-click="subsCtrl.makeVisible()">Add subscription'+''+'</div>');
      console.log(element);
      compiledElement = $compile(element)(scope);
      console.log(compiledElement);
      var popup = element.find('popup');
      console.log(popup);
      popup.triggerHandler('click');
      expect(popup.hasClass('visible')).toBe(true);
    });

  })
})
