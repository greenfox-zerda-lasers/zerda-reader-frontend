'use strict';

var users = require('./users.json');

function validator(email, password) {
  return (validUser(email, password) && (email.indexOf('@') > -1));
}

function validUser(email, password) {
  var value = false
  users.forEach(function (u) {
    if (u.email === email && u.password === password) {
      value = true;
    }
  });
  return value;
}

module.exports = validator;
