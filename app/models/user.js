var mongoose = require( 'mongoose' );
var bycrypt = require( 'bcrypt-nodejs' );

var userSchema = mongoose.Schema( {
	local : {
	    email : String,
	    password : String
	}
    } );

userSchema.methods.generateHash = function( password ){
    return bycrypt.hashSync( password, bcrypt.genSaltSync(8), null );
};

userSchema.methods.validPassword = function(){
    return bycrypt.compareSync( password, this.local.password );
};

module.exports = mongoose.model( 'User', userSchema );