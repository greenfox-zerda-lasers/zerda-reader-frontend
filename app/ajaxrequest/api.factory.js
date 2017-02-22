'use strict';

angular
  .module('zerdaReader')
  .factory('APIFactory', APIFactory);
const url = 'https://zerda-reader-mockback.gomix.me/';
const urlReal = 'https://murmuring-everglades-41117.herokuapp.com/';
const token = localStorage.token;

function APIFactory($http) {

  var APIFactory = {};

  APIFactory.getSubs = function () {
    return $http.get(urlReal + 'subscriptions?token=' + token);
  };

  APIFactory.getAll = function () {
    return $http.get(urlReal + 'feed?token=' + token);
  };

  APIFactory.getFav = function () {
    return $http.get(urlReal + 'favorites?token=' + token);
  };

  APIFactory.getFeed = function (id) {
    return $http.get(urlReal + 'feed/' + id + '?token=' + token);
  };

  APIFactory.openedArticle = function (id) {
    return $http.put(urlReal + 'feed/' + id + '?token=' + token, { opened: 1 });
  };

  APIFactory.deleteItem = function (id) {
    return $http.delete(urlReal + 'subscribe/' + id + '?token=' + token);
  };

  APIFactory.putFav = function (id) {
    return $http.put(urlReal + 'favorites?token=' + token, { item_id: id });
  };

  APIFactory.postNewFeed = function (link) {
    return $http.post(urlReal + 'subscribe?token=' + token, { feed: link });
  };

  return APIFactory;
}
