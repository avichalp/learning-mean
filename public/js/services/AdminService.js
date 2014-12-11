function Admin($http) {
		 
    return {
	
	//  to GET admin page
	getAdmin : function () {
	    return $http.get('http://localhost:8080/api/admin/');			 
	},
	
	// to POST info of new admin
	postAdmin : function (msg) {		    
	    return $http.post('http://localhost:8080/api/admin/', {email : msg.email, password : msg.password});		
	},
	
	// to POST admin-login info
	postLogin : function (msg) {
	    return $http.post('http://localhost:8080/api/login/', {email : msg.email, password : msg.password });
	},

	// to send a GET request to logout
	getLogout : function () {	
	    return $http.get('http://localhost:8080/api/logout/');	    
	},
		
	// to DELETE specified admin
	deleteAdmin : function (msg) {
	    return $http.delete('http://localhost:8080/api/admin/'+msg.user_id);
	}
    };
	   
}

angular
    .module('AdminService', [])
    .factory('Admin', Admin );
