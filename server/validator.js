'use strict';

var users = [{
	email: "bogi@reader.com",
	password: "bogi",
}, {
	email: "gabor@reader.com",
	password: "gabor",
}, {
	email: "tamas@reader.com",
	password: "tamas",
}]

function validator(email, password) {
  var validEmail = email.indexOf('@') > -1;
  var validPassword = password.length > 0;

  return validEmail && validPassword;

}

module.exports = validator;
