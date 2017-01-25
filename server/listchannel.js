'use strict';

var feed = require('./feed.json');

function listChannel() {
  var response = [];
  //console.log(feed);

  // feed.forEach(function (element) {
  //   console.log(element);
  //   // if (response.indexOf({name: element.feed_name, id: element.feed_id}) === -1) {
  //   //   response.push({name: element.feed_name, id: element.feed_id});
  //   // }
  //
  // });

  // feed.forEach(function (element) {
  //   if (!response.contains({name: element.feed_name, id: element.feed_id})) {
  //     response.push({name: element.feed_name, id: element.feed_id});
  //   }
  // });
  function filterByID(value, index, self) {
  if (self.feed_id.indexOf(value.feed_id) === index) {
    return true;
  }
}

  var res = feed.filter(filterByID);

  console.log(res);
  return res;
}

module.exports = listChannel;
