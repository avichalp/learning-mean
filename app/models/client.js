// including required modules
var bcrypt   = require('bcrypt-nodejs');
var mongoose = require( 'mongoose' );

// Schema defination
var Schema = mongoose.Schema;    
var clienttSchema = new Schema(
    {
	name  : String,
	description : String,
	imgUrl : String	
    });

// exorting Schema
module.exports = mongoose.model( 'Client' , clienttSchema );