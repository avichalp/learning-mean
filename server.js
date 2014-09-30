// modules 
var express = require( 'express' );
var app = express();

var passport = require( 'passport' );
var flash = require( 'connect-flash' );
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );

var cookieParser = require( 'cookie-parser' );
var session = require( 'express-session' );
	
// config files
var db = require( './config/db' );

// set our port
var port = process.env.PORT || 8080;

//connect to our mongoDB database
mongoose.connect(db.url); 

// get all stuff of the body (POST) parameters

// parse application/json
app.use( bodyParser.json() );
// parse application/vnd.api+json as json  
app.use( bodyParser.json( { type: 'application/vnd.api+json' } ));
// parse application/x-www-form-urlencoded 
app.use( bodyParser.urlencoded( { extended: true } ) );
// to parse cookies 
app.use( cookieParser() );

//passport(auth) related 
//app.use( session({ secret: 'App123456' }) ); 
//app.use( passport.initialize() );
//app.use( passport.session() ); 
//app.use( flash() );

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use( methodOverride( 'X-HTTP-Method-Override' ) );

// set the static files location /public/img will be /img for users
app.use( express.static( __dirname + '/public' ) ); 

// routes 
var routes = require( './app/routes' )
    routes( app ); 

// start app 
app.listen( port );	
console.log( 'Magic happens on port ' + port ); 		      
exports = module.exports = app; 					      