'use strict'

angular
  .module('zerdaReader')
  .factory('APIFactory', APIFactory);
  const url = 'https://zerda-reader-mockback.gomix.me/';

function APIFactory($resource, $http) {
  var APIFactory = {};

  APIFactory.getData = function (endpoint) {
    return $http.get(url+endpoint);
  };

  APIFactory.deleteItem = function (endpoint) {
    return $http.delete(url+endpoint);
  };

  return APIFactory;
};
