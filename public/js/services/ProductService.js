function Product($http) {
    
    return {
	
	getProduct : function (callBack) {
			
	    $http.get('http://localhost:8080/api/product/')
		.success(callBack);
	},
	postProduct : function (msg, callBack) {
			 
	    $http.post('http://localhost:8080/api/product/', msg)
		.success(callBack);
	},
	deleteProduct : function (msg, callBack) {
	    $http.delete('http://localhost:8080/api/product/' + msg.id)
		.success(callBack);
	}
		
    };
		
}

angular
    .module('ProductService', [])
    .factory('Product', Product);