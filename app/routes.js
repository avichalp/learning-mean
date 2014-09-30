module.exports = function( app, passport ) {
    
    var fs = require( 'fs' );
   
    // including Product-model here
    var Page = require( './models/Product' );       

    // server routes here
    
    // Page - GET & POST
    app.route( '/api/page/' )
    .get( function( req, res ){

	    Page.find( function( err, pages ){
		   
		    if(err)
			res.send('error->' + err );
		    res.json( pages );
		
		} );
	
	} )   
    .post( function( req, res ){
	   
	    var page = new Page;
	    
	    page.about = req.body.about;
	   
	    page.contact.name = req.body.name;
	    page.contact.address = req.body.address;
	    page.contact.email = req.body.email;
	    page.contact.phone = req.body.phone;
	    
	    page.product.name = req.body.productName;
	    page.product.description = req.body.description;
	
	    //page.product.img.data = fs.readFileSync( req.body.path );
	    //page.product.img.contentType = req.body.contentType;

	    page.save( function( err ){
		    if( err )
			res.send( 'error->' + err );
		    res.json({message : 'page created'});
		});
	} );

    // Page - PUT & DELETE
    app.route( '/api/page/:page_id' )
    .put( function( req, res ){
	    Page.findById( function( err, page ){
		    if( err )
			res.send( 'error->' + err );
		    
		    page.about = req.body.about;
				    
		    page.contact.name = req.body.name;
		    page.contact.address = req.body.address;
		    page.contact.email = req.body.email;
		    page.contact.phone = req.body.phone;
		    
		    page.product.name = req.body.productName;
		    page.product.description = req.body.description;
	
		    page.product.img.data = fs.readFileSync( req.body.path );
		    page.product.img.contentType = req.body.contentType;
		    
		    page.save( function( err ){
			    if(err)
				res.send( 'error->' +  err );
			    res.json({ message : 'successfuly updated' });
			} );
		} );
	} )
    .delete( function( req, res ){
	    Page.remove( { 
		    _id : req.params.page_id
			}, function( err, page ){
		    if( err )
			res.send( ' error-> ' + err );
		    res.json( { message : 'successfully deleted' } );			    
		} );
		} );

    // frontend(angular) routes here
    app.get( '*', function( req, res ) {
	    res.sendfile( './public/index.html' );
	});

};

