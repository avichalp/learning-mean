// configuring redis
var redis = require('redis');
var client = redis.createClient();

// including modles
var User = require('./models/user');
var Product = require('./models/product');
var Client = require('./models/client');
     
// helper function : implements auth middleware
function isLoggedIn(req, res, next) {
	    
    if (req.isAuthenticated())
	return next();	 
    res.json({ message : 'restricted area' });
    return undefined;	    	 
}
 
// routes fuction returns a functon with all mapings     
function routes(app, passport) {
    
    function contentGetRoutes(contentType){
	//client.del(contentType+'Key');
	app.get('/api/'+ contentType + '/', function (req, res){
		    client.hgetall(contentType + 'Key',
				   function (err, reply) {
				       if (err)
					   console.log(err);
				       res.json(reply);
				   });
		});
	app.post('/api/' + contentType + '/', function (req, res) {
		     console.log(req.body);
		     client.HMSET(contentType + 'Key', req.body,
				  function (req, res) {
				      if (err)
					  console.log(err);
				      res.json(reply);
				  });
		 }); 
					   
	   
    }
   
    function helperRouter(type,productOrClient){
	
	app.get('/api/' + type + '/', function (req, res) {
		    productOrClient.find(function (err, list) {
					     if(err)
						 res.send(err);
					     var anObject = {};
					     
					     for (var i=0; i<= list.length -1; i++)
						 anObject[list[i]["id"]] = {
						     name : list[i]["name"],
						     description : list[i]["description"],
						     ingUrl : list[i]["imgUrl"]
						 };
					     
					 res.json(anObject);    
					 });
		    
		} );

	app.post('/api/' + type + '/', isLoggedIn, function (req, res, done) {
		     console.log(req.body);
		     productOrClient.findOne({
						 'name' : req.body.name
					     },
					    function (err, someThing) {
						if (err)
						    return done(err);
						console.log(someThing);
						if (someThing)
						    done(null, false, req, console.log('alredy there'));
						else{
						    var newObject = new productOrClient;
						    newObject.name = req.body.name;
						    newObject.description = req.body.description;
						    newObject.imgUrl = req.body.imgUrl;
						    newObject.save(function (err) {
								       if (err)
									   throw err;
								       return done(null, newObject);
								   });
						}
						console.log(newObject);
						return undefined;
					    });
		 });
	
	app.delete('/api/' + type + '/:id', isLoggedIn, function (req, res) {
		       productOrClient.remove({ _id : req.params.id }, function (err, someThing){
						  if (err)
						      res.send(err);
						  res.json({message : 'OK'});
					      });
		   });
	
    }

    return function () {
	
	['home','about','contact'].map(contentGetRoutes);

        helperRouter('product', Product);
	helperRouter('client', Client);	
	
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

