'use strict';
(function () {
  angular
    .module('zerdaReader')
    .factory('APIFactory', APIFactory);

  function APIFactory($http) {
    // const url = 'https://zerda-reader-mockback.gomix.me/';
    const url = 'https://murmuring-everglades-41117.herokuapp.com/';
    const token = localStorage.token;
    const service = {
      postLogin: postLogin,
      postSignUp: postSignUp,
      getAllFeedItems: getAllFeedItems,
      getFavoriteItems: getFavoriteItems,
      getSubscritions: getSubscritions,
      getFeedItems: getFeedItems,
      deleteFeed: deleteFeed,
      postNewFeed: postNewFeed,
      openArticle: openArticle,
      putFavorite: putFavorite,
    };

    function postLogin(em, pass) {
      return $http.post(url + 'user/login', { email: em, password: pass });
    }

    function postSignUp(em, pass) {
      return $http.post(url + 'user/signup', { email: em, password: pass });
    }

    function getAllFeedItems() {
      return $http.get(url + 'feed?token=' + token);
    }

    function getFavoriteItems() {
      return $http.get(url + 'favorites?token=' + token);
    }

    function getSubscritions() {
      return $http.get(url + 'subscriptions?token=' + token);
    }

    function getFeedItems(id, offset) {
      return $http.get(url + 'feed/' + id + '?token=' + token + '&offset=' + offset + '&items=50');
    }

    function openArticle(id) {
      return $http.put(url + 'feed/' + id + '?token=' + token, { opened: 1 });
    }

    function deleteFeed(id) {
      return $http.delete(url + 'subscribe/' + id + '?token=' + token);
    }

    function putFavorite(id) {
      return $http.post(url + 'favorites?token=' + token, { item_id: id });
    }

    function postNewFeed(link) {
      return $http.post(url + 'subscribe?token=' + token, { feed: link });
    }

    return service;
  }
})();
