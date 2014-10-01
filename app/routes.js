module.exports = function (app) {
    
    var fs = require('fs');
    var Page = require('./models/Page');

    var insertParams = function (req, page) {
    	
	page.about = req.body.about;

	page.contact.name = req.body.name;
	page.contact.address = req.body.address;
	page.contact.email = req.body.email;
	page.contact.phone = req.body.phone;

	page.product.name = req.body.productName;
	page.product.description = req.body.description;
	
	//page.product.img.data = fs.readFileSync( req.body.path );
	//page.product.img.contentType = req.body.contentType;
    }

    // server routes here
    // Page - GET & POST
    return (function () {

	app.route ('/api/page/')

	.get (function (req, res){
		Page.find( function( err, pages ){
			if(err)
			    res.send ('error->' + err);
			res.json (pages);
		    });	
	    })
   
	.post (function (req, res){
		var page = new Page;
		insertParams(req, page);
		page.save (function(err){
			if(err)
			    res.send ('error->' + err);
			res.json ({ message : 'page created' });
		    });
	    });

	// Page - PUT & DELETE
	// PUT not working!!! 
	app.route ('/api/page/:page_id')

	.put (function (req, res){
		Page.findById (function(err, page){
		    if(err)
			res.send ('error->' + err);
		    insertParams (req, page);
		    page.save ( function(err){
			    if(err)
				res.send ('error->' +  err);
			    res.json ({ message : 'successfuly updated' });
			});
		    });
	    })

	.delete (function(req, res){
		Page.remove({ 
			_id : req.params.page_id
			    }, function(err, page){
			if(err)
			    res.send (' error-> ' + err);
			res.json ({ message : 'successfully deleted' });			    
		    });
	    });

	// frontend(angular) routes here
	app.get ('*', function (req, res) {
		res.sendfile ('./public/index.html');
	    });
    
	});

    
};
