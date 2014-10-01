// including necessary modules 
var express = require ('express');
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');
var methodOverride = require ('method-override');
var cookieParser = require ('cookie-parser');

// including config files
var db = require ( './config/db' );

// including routes 
var routes = require ('./app/routes');

// calling express() to create an app object
var app = express ();
	
// set our port
var port = process.env.PORT || 8080;

//connect to our mongoDB database
mongoose.connect (db.url); 

// get all stuff of the body (POST) parameters

// parse application/json
app.use (bodyParser.json());

// parse application/vnd.api+json as json  
app.use (bodyParser.json (
			  { 
			      type: 'application/vnd.api+json'
				  }
			  ));

// parse application/x-www-form-urlencoded 
app.use (bodyParser.urlencoded (
				{ 
				    extended: true
					}
				));
// to parse cookies 
app.use (cookieParser());

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use (methodOverride( 'X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use (express.static ( __dirname + '/public' )); 

routes (app).call(); 

// to start 'app' 
app.listen (port);	
console.log ('server running at ' + port); 		      

// exporting as module
exports = module.exports = app; 					      