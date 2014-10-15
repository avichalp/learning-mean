// including necessary modules 
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

// including routes 
var routes = require('./app/routes');

// configuring mongo
var configDB = require('./config/db.js');
mongoose.connect(configDB.url);

// configuring passport
require('./config/passport')(passport);

// calling express() to create an app object
var app = express();
	
// set our port
var port = process.env.PORT || 8080;
 
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json  
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: true}));
// to parse cookies 
app.use(cookieParser());

// override with the X-HTTP-Method-Override header in the request.
app.use(methodOverride( 'X-HTTP-Method-Override'));

// set the static files location /public/img 
app.use(express.static( __dirname + '/public' ));

// to manage sessions
app.use(session({ secret:'123456' }));
// to flash msgs
app.use(flash());
// to initailise passport
app.use(passport.initialize());
// to manage logged-in sessions 
app.use(passport.session());

//calling function returned by routes module
routes(app, passport); 

// to start 'app' 
app.listen(port);	
console.log('server running at ' + port); 		      

// exporting as module
exports = module.exports = app; 					      