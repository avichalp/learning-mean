function Product($http) {
    
    return {
	
	getProduct : function () {	
	    return $http.get('http://localhost:8080/api/product/');
	},
	postProduct : function (msg){
	    return $http.post('http://localhost:8080/api/product/', msg);
	},
	deleteProduct : function (msg){
	    return $http.delete('http://localhost:8080/api/product/' + msg.id);
	}
		
    };
		
}

angular
    .module('ProductService', [])
    .factory('Product', Product);
