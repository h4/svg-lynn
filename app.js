"use strict";

var express = require('express');
var routes = require('./routes/');
var multiparty = require('connect-multiparty');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var multipartMiddleware = multiparty();

var app = express();

app.use(cookieParser('keyboard cat'));
app.use(session());
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', routes.index);
app.post('/convert', multipartMiddleware, routes.convert);
app.get('/done', routes.done);

var server = app.listen(3000, function() {
    console.log('Listened on port %d', server.address().port);
});
