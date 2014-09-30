var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var PageSchema = new Schema({
       
	about : String,
	
	contact : {
 
	    name : String,
	    address : String,
	    email : String,
	    phone : String
	
	},

	product : {
	    
	    name : String,
	    description : String,
	    img : {

		data : Buffer,
		contentType : String
	   
	    }
	
	}
	
    });

module.exports = mongoose.model( 'Page' , PageSchema );
