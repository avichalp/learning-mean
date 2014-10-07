angular.module('AddAdminService', []).factory('AddAdmin', ['$http', function ($http) {
	    
	    return {
		postAddAdmin : function (callBack, msg) {		    
		    $http.post('http://localhost:8080/api/addadmin/', {email : msg.email, password : msg.password})
			.success(callBack);		
		}
	    };

	}]);