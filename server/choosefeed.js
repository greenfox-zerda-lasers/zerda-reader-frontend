'use strict';

var feed = require('./feed.json');
//console.log(feed);

function searchId(id) {
  var response = [];
  //console.log(feed);

  feed.forEach(function (element) {
    if (element.feed_id == id) {
      response.push(element);
    }
  });
  console.log(response);
  return response;
}

module.exports = searchId;
