'use strict';

var subscriptions = require('./subscriptions.json');

function listChannel() {

  console.log(subscriptions);
  var response = subscriptions;
  return response;
}

module.exports = listChannel;
