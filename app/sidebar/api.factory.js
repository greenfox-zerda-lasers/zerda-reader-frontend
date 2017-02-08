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

  APIFactory.putItem = function(endpoint, id){
    return $http.put(url+endpoint, {item_id: id});
  }

  // dataFactory.getCustomer = function (id) {
  //     return $http.get(urlBase + '/' + id);
  // };
  //
  // dataFactory.insertCustomer = function (cust) {
  //     return $http.post(urlBase, cust);
  // };
  //
  // dataFactory.updateCustomer = function (cust) {
  //     return $http.put(urlBase + '/' + cust.ID, cust)
  // };
  //
  // dataFactory.deleteCustomer = function (id) {
  //     return $http.delete(urlBase + '/' + id);
  // };
  //
  // dataFactory.getOrders = function (id) {
  //     return $http.get(urlBase + '/' + id + '/orders');
  // };

  return APIFactory;
};
