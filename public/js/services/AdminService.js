angular.module('AdminService', [])
    .factory('Admin', ['$http', function ($http) {
	    
		return {
		    
		    getAdmin : function (callBack) {
			
			$http.get('http://localhost:8080/api/admin/')
			    .success(callBack);
		    
		    }
		};
	   
	    }]);