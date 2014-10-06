angular.module('ProductService', []).factory('Product', ['$http', function ($http) {
	    
	    return {
		getProduct : function (callBack) {
		    $http.get('http://localhost:8080/api/product/')
			.success(callBack);
		}
	    };
	}]);