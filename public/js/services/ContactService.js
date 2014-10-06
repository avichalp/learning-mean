angular.module('ContactService', []).factory('Contact', ['$http', function ($http) {
	    
	    return {
		getContact : function (callBack) {
		    $http.get('http://localhost:8080/api/contact/')
			.success(callBack);
		}
	    };
	
	}]);