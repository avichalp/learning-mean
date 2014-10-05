(function () {

    var redis = require ('redis');
    var client = redis.createClient();

    var viewsUrl = './public/views/'
    
    var isLoggedIn = (function (req, res, next) {
	    
	    if (req.isAuthenticated())
		return next();
	    res.json({ message : 'restricted area' });
	
	});

    module.exports = (function (app, passport) {
	    
	    var apiCall = (function (apiType) {	
		   
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
		
		});
       	    		    	           	    	   
	    return (function () {
		    
		    ['home', 'about', 'product', 'contact' ].map(apiCall);
		    
		    app.route('/login')
			.get( function (req, res) {
				res.sendfile(viewsUrl + 'login.html');
			    })
			.post(passport.authenticate('local-login', {
				successRedirect : '/admin', 
				    failureRedirect : '/login', 
				    failureFlash : true 
				    }));
	    
		    app.get('/logout', function (req, res){
			    req.logout();
			    res.redirect('/');
			});
	
		    app.get('/admin', isLoggedIn, function (req, res) {
			    res.sendfile('./public/admin.html');
			});

		    app.route('/addadmin')
			.get(isLoggedIn, function (req, res) {
				res.sendfile(viewsUrl+'addadmin.html');
			    })
			.post(isLoggedIn, passport.authenticate('local-signup', {
				    successRedirect : '/', 
					failureRedirect : '/addadmin', 
					failureFlash : true 
					}));
		    
		    app.get('*', function (req, res) {
			    res.sendfile('./public/index.html');
			});	
		    
		});    
	});
})();