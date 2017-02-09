'use strict'

angular
  .module('zerdaReader')
  .factory('APIFactory', APIFactory);
  const url = 'https://zerda-reader-mockback.gomix.me/';

function APIFactory($http) {

  var APIFactory = {};

  APIFactory.getSubs = function () {
    return $http.get(url+'subscription');
  };

  APIFactory.getAll = function () {
    return $http.get(url+'feed');
  };

  APIFactory.getFav = function () {
    return $http.get(url+'favorites');
  };

  APIFactory.getFeed = function (id) {
    return $http.get(url+'feed/'+id);
  };

  APIFactory.deleteItem = function (id) {
    return $http.delete(url+'subscribe/'+id);
  };

  APIFactory.putFav = function(id){
    return $http.put(url+'favorites', {item_id: id});
  }

  APIFactory.postRSS = function(rss){
    return $http.post(url+'subscribe', {feed: rss});
  }

  return APIFactory;
};
