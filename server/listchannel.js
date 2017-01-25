'use strict';

var subscriptions = require('./subscriptions.json');

function listChannel() {
<<<<<<< HEAD
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
=======
  console.log(subscriptions);
  var response = subscriptions;
  return response;
>>>>>>> 9ffc421b1dc0374e6853441224f6aabef2dab85b
}

module.exports = listChannel;
