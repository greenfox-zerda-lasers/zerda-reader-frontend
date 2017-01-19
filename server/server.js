'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var validator = require('./validator');

var app = express();
app.use(bodyParser.json());
// app.use(express.static('client'));


app.post('/user/login', function(req, res) {
  console.log(req.body);
  var email = req.body.email;
  var password = req.body.password;

  if(validator(email, password)) {
      var response = {
          "status": "ok",
      };
  } else {
      var response = {
          "status": "incorrect password",
      };
  }
  res.send(response);
});


app.listen(3000);
