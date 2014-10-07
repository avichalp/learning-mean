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
		   
		    app.post('/api/login/' ,passport.authenticate('local-login'), function (req, res) {
			    res.json({message: 'OK'});
			});	    		    
		    
		    app.post('/api/addadmin/',isLoggedIn, passport.authenticate('local-signup'), function (req, res) {
				    res.json( {message: 'admin-added'} );
			});
		    app.get('/api/admin/', isLoggedIn, function (req, res) {
			    res.json( {message: 'OK'} );
			});

		    app.get('/api/logout/', isLoggedIn, function (req, res){
			    req.logout();
			    res.json({status : 'loggedout'});
			});

		    app.get('*', function (req, res) {
			    res.sendfile('./public/index.html');
			});	
		    
		});    
	});
})();