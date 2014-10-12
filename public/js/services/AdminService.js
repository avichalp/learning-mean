function Admin($http) {
		 
    return {
	
	//  to GET admin page
	getAdmin : function (callBack) {
	    
	    $http.get('http://localhost:8080/api/admin/')
		.success(callBack);
			 
	},
	
	// to GET addadmin page
	getAddAdmin : function (callBack) {
	    $http.get('http://localhost:8080/api/addadmin/')
		.success(callBack);
	},

	// to POST info of new admin
	postAddAdmin : function (msg, callBack) {		    
	    
	    $http.post('http://localhost:8080/api/addadmin/', {email : msg.email, password : msg.password})
		.success(callBack);		
		
	},
	
	// to GET list of admins
	getAdminList : function (callBack){
	    $http.get('http://localhost:8080/api/adminlist/')
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