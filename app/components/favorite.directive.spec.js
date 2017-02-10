'use strict'

describe('Favorite directive', function () {
  var $compile;
  var scope;
  var element;
  var compiledElement;
  var directiveElem;

  beforeEach(function () {
    module('zerdaReader', 'templates');

    inject(function (_$compile_, $rootScope) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      scope.color = false;
      scope.article = {
        id: 1,
        title: 'Fox on the Mon!',
        description: 'Bacon',
        created: 1484756107,
        feed_name: 'Fox Crunch',
        feed_id:43673,
        favorite:false,
        opened:true,
        url: 'http://fox.com/moon',
      };

      directiveElem = getCompiledElement();
    });
  });

    function getCompiledElement() {
      element = angular.element('<favorite-icon article="article"></favorite-icon>');
      compiledElement = $compile(element)(scope);
      scope.$digest();
      return compiledElement;
    }

  it('should add the item to the favorites and color the star yellow', function () {
    var e = directiveElem.find('i')

    e.triggerHandler('click');
    expect(e.hasClass('yellow')).toBe(true);

    e.triggerHandler('click');
    expect(e.hasClass('yellow')).toBe(false);
  });
})
