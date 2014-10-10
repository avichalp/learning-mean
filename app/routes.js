// configuring redis
var redis = require('redis');
var client = redis.createClient();

// including modles
var User = require('./models/user');
var Product = require('./models/product');
    
// private method : implements auth middleware
function isLoggedIn(req, res, next) {
	    
    if (req.isAuthenticated())
	return next();	 
    res.json({ message : 'restricted area' });
    return undefined;	    	 
}
 
// routes fuction returns a functon with all maping     
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
	   
    }
   
    return function () {
	
	['home','about','contact'].map(contentGetRoutes);
			
	app.post('/api/home/',isLoggedIn, function (req, res) {
		     console.log(req.body);
		     client.HMSET('homeKey', req.body,			  
				  function (err, reply) {
				      if (err)
					  console.log(err);
				      res.json(reply);
				  });
		     
		 });

	app.post('/api/about/',isLoggedIn, function (req, res) {
		     console.log(req.body);
		     client.HMSET('aboutKey', req.body,			  
				  function (err, reply) {
				      if (err)
					  console.log(err);
				      res.json(reply);
				  });
		     
		 });
	
	app.post('/api/contact/',isLoggedIn, function (req, res) {
		     console.log(req.body);
		     client.HMSET('contactKey', req.body,			  
				  function (err, reply) {
				      if (err)
					  console.log(err);
				      res.json(reply);
				  });
		     
		 });
	

	app.get('/api/product/', function (req, res) {
		   
		    Product.find(function (err, products) {
				  if (err)
				      res.send(err);
				  
				  var productList = {};
				  
				  for (var i =0; i<= products.length -1; i++)
				      productList[products[i]["id"]] = {
					  name : products[i]["name"],
					  description : products[i]["description"],
					  imgUrl : products[i]["imgUrl"]
				      }; 
				  
				  res.json(productList);
			      }
			     
			     );	
		});
	    
	app.post('/api/product/',isLoggedIn, function (req, res, done) {
		     console.log(req.body);
		     Product.findOne(
			 {
			     'name' : req.body.name
			 },
			 function (err, product) {
			     if (err)
				 return done(err);
			     if (product)
				 return done(null, false, req, console.log('alredy there'));
			     
		     else{
			 var newProduct = new Product();
			 newProduct.name = req.body.name;
			 newProduct.description = req.body.description;
			 newProduct.imgUrl = req.body.imgUrl;
			 newProduct.save(function (err) {
					     if (err)
						 throw err;
					     return done(null, newProduct);
					 }); 
		     }
			     return undefined;
			 }   
		     );
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

