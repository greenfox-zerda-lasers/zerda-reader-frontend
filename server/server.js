'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var validator = require('./validator');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());


app.post('/user/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  if (validator(email, password)) {
      var response = {
        result: 'success',
        token: '0-9A-Z',
        id: 4321,
      };
  } else {
      var response = {
        result: 'fail',
        message: 'invalid username or password',
      };
  }
  res.send(response);
});


app.listen(3000);
