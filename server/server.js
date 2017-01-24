'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var validator = require('./validator');
var randomToken = require('./tokengenerator.js');

var users = require('./users.json')
// var cors = require('cors');


var app = express();

// app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

////////////////  LOG IN  ////////////////

app.post('/user/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  if (validator(email, password)) {
      var response = {
        result: 'success',
        token: randomToken(),
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

////////////////  SIGN UP  ////////////////

app.post('/user/signup', function (req, res) {
  var user = {
    email: req.body.email,
    password: req.body.password
  }
  console.log(user)
});

app.listen(3000);
