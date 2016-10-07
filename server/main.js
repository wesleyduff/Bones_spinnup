var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('../routes/index');
var app = new express();


// all environments
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//assign the swig view engine to .html files
var swig = require('swig');
app.engine('html', swig.renderFile);

app.use('/', routes);

app.listen(7777, function(){
    console.log('Example loaded');
})