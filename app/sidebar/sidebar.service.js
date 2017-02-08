'use strict'

angular
  .module('zerdaReader')
  .service('SidebarService', SidebarService);
  const url = 'https://zerda-reader-mockback.gomix.me/';

function SidebarService($resource) {
  //var endPoint = 'subscription';
  return $resource(url+'subscription', {}, {});
  //   favs: $resource(url+'favorites', {}, {}),
  //   all: $resource(url+'feed', {}, {})
  // }
};
