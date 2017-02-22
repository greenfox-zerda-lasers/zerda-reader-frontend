'use strict';

angular
  .module('zerdaReader')
  .factory('APIFactory', APIFactory);
  const url = 'https://zerda-reader-mockback.gomix.me/';
  const urlReal = 'https://murmuring-everglades-41117.herokuapp.com/';

function APIFactory($http) {

  var APIFactory = {};

  APIFactory.getSubs = function () {
    return $http.get(urlReal + 'subscriptions?token=' + localStorage.token);
  };

  APIFactory.getAll = function () {
    return $http.get(urlReal + 'feed?token=' + localStorage.token);
  };

  APIFactory.getFav = function () {
    return $http.get(urlReal + 'favorites?token=' + localStorage.token);
  };

  APIFactory.getFeed = function (id) {
    return $http.get(urlReal + 'feed/' + id + '?token=' + localStorage.token);
  };

  APIFactory.openedArticle = function (id) {
    return $http.put(urlReal + 'feed/' + id + '?token=' + localStorage.token, { opened: 1 });
  };

  APIFactory.deleteItem = function (id) {
    return $http.delete(urlReal + 'subscribe/' + id + '?token=' + localStorage.token);
  };

  APIFactory.putFav = function (id) {
    console.log(id)
    return $http.put(urlReal + 'favorites?token=' + localStorage.token, { item_id: id });
  };

  APIFactory.postRSS = function (url) {
    console.log(url)
    return $http.post(urlReal + 'subscribe?token=' + localStorage.token, { feed: url});
  };

  return APIFactory;
}
