'use strict';

angular
  .module('zerdaReader')
  .factory('APIFactory', APIFactory);
  const url = 'https://zerda-reader-mockback.gomix.me/';
  const urlReal = 'https://murmuring-everglades-41117.herokuapp.com/';

function APIFactory($http) {

  var APIFactory = {};

  APIFactory.getSubs = function () {
    return $http.get(url + 'subscription');
  };

  APIFactory.getAll = function () {
    // return $http.get(urlReal + 'feed');
    return $http.get(url+'feed');
    //return $http.get('https://murmuring-everglades-41117.herokuapp.com/feed?token=E6F1CEE5407B499D989065AA0D0B7836');

  };

  APIFactory.getFav = function () {
    return $http.get(url + 'favorites');
  };

  APIFactory.getFeed = function (id) {
    return $http.get(url + 'feed/' + id);
  };

  APIFactory.openedArticle = function (id) {
    return $http.put(url + 'feed/' + id, { opened: true });
  };

  APIFactory.deleteItem = function (id) {
    return $http.delete(url + 'subscribe/' + id);
  };

  APIFactory.putFav = function (id) {
    return $http.put(url + 'favorites', { item_id: id });
  };

  APIFactory.postRSS = function (rss) {
    return $http.post(url + 'subscribe', { feed: rss });
  };

  return APIFactory;
}
