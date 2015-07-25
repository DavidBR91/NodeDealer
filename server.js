var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config.js');
var path = require('path');

var app = express();
var serverPort = config.serverPort;
var mongoURL = config.mongoURL;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

var index = require('./routes/index.js');
var deals = require('./routes/deals.js');

app.use('/deals', deals);
app.use('/', index);

app.use(function(req, res) {
  return res.redirect(req.protocol + '://' + req.get('Host') + '/#' + req.url)
});

mongoose.connect(mongoURL);
console.log('Connected to mongoDB');

app.listen(serverPort);
console.log('Server listening on PORT: ' + serverPort);

module.exports = app;
