function Admin($http) {
		 
    return {
	
	//  to GET admin page
	getAdmin : function (callBack) {
	    
	    $http.get('http://localhost:8080/api/admin/')
		.success(callBack);
			 
	},
	

	// to POST info of new admin
	postAdmin : function (msg, callBack) {		    
	    
	    $http.post('http://localhost:8080/api/admin/', {email : msg.email, password : msg.password})
		.success(callBack);		
		
	},
	
	// to POST admin-login info
	postLogin : function (msg, callBack) {
	    
	    $http.post('http://localhost:8080/api/login/', {email : msg.email, password : msg.password })
		.success(callBack);
	    
	},

	// to send a GET request to logout
	getLogout : function (callBack) {
			
	    $http.get('http://localhost:8080/api/logout/')
		.success(callBack);	    
	},
		
	// to DELETE specified admin
	deleteAdmin : function (msg, callBack) {
	    
	    $http.delete('http://localhost:8080/api/admin/'+msg.user_id  )
		.success(callBack);
	    
	}
    };
	   
}

angular
    .module('AdminService', [])
    .factory('Admin', Admin );