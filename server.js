var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config.js')

var app = express();
var serverPort = config.serverPort;
var mongoURL = config.mongoURL;

mongoose.connect(mongoURL);
console.log('Connected to mongoDB');

app.use(morgan('dev'));
app.listen(serverPort);
console.log('Server listening on PORT: ' + serverPort);
