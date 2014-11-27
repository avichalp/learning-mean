var mongoose = require('mongoose');

// Schema defination
var Schema = mongoose.Schema;    
var productSchema = new Schema(
    {
	name  : String,
	description : String,
	imgUrl : String	
    });

// exorting Schema
module.exports = mongoose.model( 'Product' , productSchema );