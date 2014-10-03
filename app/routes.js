module.exports = function (app) {
    
    var fs = require ('fs');       
    var redis = require ('redis');
    var client = redis.createClient();
  
    var apiCall = function (apiType) {
	
	app.route('/api/' + apiType + '/' )
	.get(function (req, res){
		client.get(apiType + 'key', function (err, reply) {
			if (err)
			    console.log(err);
			res.json(reply);
		    });
	    })		
	.post(function (req, res) {
		console.log(req.body);
		client.set( apiType + 'key', req.body[apiType], function(err, reply) {
			if (err)
			    console.log(err);
			res.json(reply);
		    });		
	    })
	.put(function (req, res){
		client.set(apiType + 'key', req.body.apiType, redis.print);
	    })
	.delete(function(req, res){
		client.del(apiType + 'key', function (err, reply) {
			if (err)
			    res.json(reply);
		    });
	    });
    }
    
    return (function () {

	    // server routes here
	    var pages = ['home', 'about', 'product', 'contact' ];
	    pages.map(apiCall);
	    //apiCall('about');
	   	    	    
	    // frontend(angular) routes here
	    app.get ('*', function (req, res) {
		    res.sendfile ('./public/index.html');
		});
	});    
};
