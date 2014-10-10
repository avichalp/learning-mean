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

    return function () {
			
	app.route('/api/home/')
	    .get(function (req, res){
		     client.get('homeKey',
				function (err, reply) {
				    if (err)
					console.log(err);
				    res.json(reply);
				});
		 })			
	    .post(isLoggedIn, function (req, res) {
		      console.log(req.body);
		      client.set('homeKey',
				 req.body['home'], function (err, reply) {
				     if (err)
					 console.log(err);
				     res.json(reply);
				 });
		  })
	    .delete(isLoggedIn, function(req, res){
			client.del('homeKey',
				   function (err, reply) {
				       if (err)
					   res.json(reply);
				   });
		    });

	app.route('/api/about/')
	    .get(function (req, res){
		     client.get('aboutKey',
				function (err, reply) {
				    if (err)
					console.log(err);
				    res.json(reply);
				});
		 })			
	    .post(isLoggedIn, function (req, res) {
		      console.log(req.body);
		      client.set('aboutKey',
				 req.body['about'], function (err, reply) {
				     if (err)
					 console.log(err);
				     res.json(reply);
				 });
		  })
	    .delete(isLoggedIn, function(req, res){
			client.del('aboutKey',
				   function (err, reply) {
				       if (err)
					   res.json(reply);
				   });
		    });

	app.route('/api/contact/')
	    .get(function (req, res){
		     client.get('contactKey',
				function (err, reply) {
				    if (err)
					console.log(err);
				    res.json(reply);
				});
		 })			
	    .post(isLoggedIn, function (req, res) {
		      console.log(req.body);
		      client.set('contactKey',
				 req.body['contact'], function (err, reply) {
				     if (err)
					 console.log(err);
				     res.json(reply);
				 });
		  })
	    .delete(isLoggedIn, function(req, res){
			client.del('contactKey',
				   function (err, reply) {
				       if (err)
					   res.json(reply);
				   });
		    });

	app.route('/api/product/')
	    .get(function (req, res){
		     client.get('productKey',
				function (err, reply) {
				    if (err)
					console.log(err);
				    res.json(reply);
				});
		 })			
	    .post(isLoggedIn, function (req, res) {
		      console.log(req.body);
		      client.set('productKey',
				 req.body['product'], function (err, reply) {
				     if (err)
					 console.log(err);
				     res.json(reply);
				 });
		  })
	    .delete(isLoggedIn, function(req, res){
			client.del('productKey',
				   function (err, reply) {
				       if (err)
					   res.json(reply);
				   });
		    });

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
}    
	    		            	    
module.exports = routes;

 