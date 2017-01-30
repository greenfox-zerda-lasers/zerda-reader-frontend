'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var validator = require('./validator');

var randomToken = require('./tokengenerator.js');
var searchFeed = require('./choosefeed.js');
var listChannel = require('./listchannel.js');

var users = require('./users.json')
var feed = require('./feed.json')
var fs = require('fs');

// var cors = require('cors');


var app = express();

// app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

////////////////  LOG IN  ////////////////

app.post('/user/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var checkResult = validator(email, password);
  if (checkResult.value) {
    var response = {
      result: 'success',
      token: randomToken(),
      id: checkResult.id,
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
  var email = req.body.email;
  var password = req.body.password;
  var checkResult = validator(email, password);
  if (checkResult.value) {
    var response = {
      result: 'fail',
      message: 'email address already exists',
    };
  } else {
    var id = users.length + 1;
    var user = {
      email: req.body.email,
      password: req.body.password,
      id: id
    }
    users.push(user);
    fs.writeFile('users.json', JSON.stringify(users));
    var response = {
      result: 'success',
      token: randomToken(),
      id: id,
    };
  }
  res.send(response);
});

////////////////  LIST FEED  ////////////////

app.get('/feed/:id', function (req, res) {
  var id = req.params.id;
  var response = searchFeed(id);
  res.send(response);
});

////////////////  LIST SUBSCRIPTION  ////////////////

app.get('/subscription', function (req, res) {
  var response = listChannel();
  res.send(response);
});



app.listen(3000);
