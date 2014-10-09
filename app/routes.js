// configuring redis
var redis = require('redis');
var client = redis.createClient();

// including modles
var User = require('./models/user');
    
// private method : implements auth middleware
function isLoggedIn(req, res, next) {
	    
    if (req.isAuthenticated())
	return next();	 
    res.json({ message : 'restricted area' });
    return undefined;	    	 
}
 
// fuction for maping GET/POST/DELETE on Content    
function routes(app, passport) {
	    		   
    function apiCall(apiType) {	
			       
	app.route('/api/' + apiType + '/' )
	    .get(function (req, res){
		     client.get(apiType + 'key', function (err, reply) {
				    if (err)
					console.log(err);
				    res.json(reply);
				});
		 })		
	    .post(isLoggedIn, function (req, res) {
		      console.log(req.body);
		      client.set( apiType + 'key', req.body[apiType], function (err, reply) {
				      if (err)
					  console.log(err);
				      res.json(reply);
				  });		
		  })
	    .delete(isLoggedIn, function(req, res){
			client.del(apiType + 'key', function (err, reply) {
				       if (err)
					   res.json(reply);
				   });
					       
		    });
			       
    };
       	    
    // return function that maps urls with methods
    function urlMapping() {
	
	// url maps to GET/POST/DELETE content sections
	['home', 'about', 'product', 'contact' ].map(apiCall);
		   
	// url map to POST login details
	app.post('/api/login/' ,passport.authenticate('local-login'), function (req, res) {
		     res.json({message: 'OK'});
		 });	    		    
	
	// url map for GET addadmin view & POST new admin
	app.get('/api/addadmin/', isLoggedIn, function (req, res) {
		    res.json({message : 'OK'});
		});
	app.post('/api/addadmin/',isLoggedIn, passport.authenticate('local-signup'), function (req, res) {
		     res.json( {message: 'OK'} );
		 });

	// url  map to GET list of admins 
	app.get('/api/adminlist/', isLoggedIn, function (req, res) {
		    User.find(function (err, admins) {
				  if (err)
				      res.send(err);
				 
				  var adminList = {};
				  
				  for (var i =0; i<= admins.length -1; i++)
				      adminList[admins[i]["id"]] = admins[i]["local"]["email"]; 
				  
				  res.json(adminList);
			      }
			     
			     );
		    
		});
    
				       
	// url map to GET  admin page
	app.get('/api/admin/', isLoggedIn, function (req, res) {
		    res.json( {message: 'OK'} );
		});
	// url map to DELETE a admin
	app.delete('/api/admin/:user_id', isLoggedIn, function (req, res) {
		       User.remove({_id : req.params.user_id}, function (err, user) {
				       if (err)
					   res.send(err);
				       res.json({message : 'OK'});
				   });
		   });
				       
	//  logging-out
	app.get('/api/logout/', isLoggedIn, function (req, res){
		    req.logout();
		    res.json({message : 'OK'});
		});
				       
	// default GET
	app.get('*', function (req, res) {
		    res.sendfile('./public/index.html');
		});	
				       
    };    
			
    return urlMapping;
}

module.exports = routes;

 