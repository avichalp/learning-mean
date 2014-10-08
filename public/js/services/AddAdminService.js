angular.module('AddAdminService', [])
    .factory('AddAdmin', ['$http', function ($http) {
	    
		return {
		
		    postAddAdmin : function (msg, callBack) {		    
			
			$http.post('http://localhost:8080/api/addadmin/', {email : msg.email, password : msg.password})
			    .success(callBack);		
		
		    }
		};

	    }]);