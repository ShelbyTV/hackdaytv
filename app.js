/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('nyc');
});

app.get('/nyc', function(req, res){
  res.render('nyc');
});

app.get('/apis', function(req, res){
  res.render('apis');
});


app.get('/sf', function(req, res){
  res.render('sf');
});

app.get('/contribute', function(req, res){
  res.render('contribute');
});

app.get('/faq', function(req, res){
  res.render('faq');
});

app.get('/prizes', function(req, res){
  res.render('prizes');
});

app.listen(3005);

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
