'use strict';

var users = require('./users.json');

function validator(email, password) {
  var checkUser = validUser(email, password);

  if (email.indexOf('@') <= -1){
    checkUser.value = false;
  };
  return checkUser;
}

function validUser(email, password) {
  var value = false;
  var id = 0;
  users.forEach(function (user) {
    if (user.email === email && user.password === password) {
      id = user.id;
      value = true;
    }
  });
  var response = {
    value: value,
    id: id
  };
  return response;
}

module.exports = validator;
