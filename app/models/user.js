// including required modules
var bcrypt   = require('bcrypt-nodejs');
var mongoose = require( 'mongoose' );

// Schema defination
var Schema = mongoose.Schema;    
var userSchema = new Schema(
    {
	local :
	
	{ 
	    email : String,	    
	    password : String
	} 			
	
    });
    
// methods for this Schema 
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// exorting Schema
module.exports = mongoose.model( 'User' , userSchema );

 