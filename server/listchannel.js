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


  var res = feed.filter( function (element, index, arr){
    return arr.indexOf(element) === index
  })

  console.log(res);
  return response;
}

module.exports = listChannel;
