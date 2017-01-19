'use strict';

function validator(email, password) {
  var validEmail = email.indexOf('@') > -1;
  var validPassword = password.length > 0;

  return validEmail && validPassword;

}

module.exports = validator;
