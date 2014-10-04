(function () {
    var redis = require ('redis');
    var client = redis.createClient();
    
    var isLoggedIn = (function (req, res, next) {
	    if (req.isAuthenticated())
		return next();
	    res.redirect('/');
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
		    // server routes here
		    ['home', 'about', 'product', 'contact' ].map(apiCall);
		    // frontend(angular) routes here
		    
		    app.get('/login', function (req, res) {
			    res.sendfile('./public/views/login.html');
			});
		    app.post('/login', passport.authenticate('local-login', {
				successRedirect : '/admin', 
				    failureRedirect : '/login', 
				    failureFlash : true 
				    }));
		    app.get('/admin', isLoggedIn, function (req, res) {
			    res.sendfile('./public/views/admin.html')
			});

		    app.get('/logout', function (req, res){
			    req.logout();
			    res.redirect('/');
			});

		    app.get('*', function (req, res) {
			    res.sendfile('./public/index.html');
			});
		    
		    
		});    
	});
    
})();