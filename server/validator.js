'use strict';

var users = require('./users.json');

function validator(email, password) {
  return (validUser(email, password) && (email.indexOf('@') > -1));
}

function validUser(email, password) {
  var value = false;
  users.forEach(function (user) {
    if (user.email === email && user.password === password) {
      value = true;
    }
  });
  return value;
}

module.exports = validator;
