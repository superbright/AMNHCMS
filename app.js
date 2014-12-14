
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

storage = require('./persist');

var app = express();
database = express();

storage.initSync();

if(!storage.getItem('streams')){
	storage.setItem('streams',[]);
}

console.log("streams: " + storage.getItem('likes'));


app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    next();
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.get('/getStreams.json', function(req,res){
    // Website you wish to allow to connect

   	var streamsforsave = storage.getItem('streams');	
    res.send(streamsforsave);
});

app.get('/getLikes.json', function(req,res){

    var likesforsave = storage.getItem('likes');  
    res.send(likesforsave);
});

app.put('/getLikes.json/:id', function (req, res){ 

    console.log('update ' + req.params.id);
    
    var id = req.params['id'];
    var likes = storage.getItem('likes');  
    likes[id]++;

    var getParent = id.split('_');
    likes[getParent[0]] += 1;

    storage.setItem('likes',likes);
  
    res.send(true);
});

app.get('/getLikes.json/:id', function(req,res){
    var id = req.params['id'];
     console.log('get ' + id);


    var likes = storage.getItem('likes');  
    var value = likes[id];
    res.send({val : value});
});

http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port " + 3000);
});
