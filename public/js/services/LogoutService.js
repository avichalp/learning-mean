function Logout($http) {
    
    return {
	
	getLogout : function (callBack) {
			
	    $http.get('http://localhost:8080/api/logout/')
		.success(callBack);
	    
	}
	
    };
    
}

angular
    .module('LogoutService', [])
    .factory('Logout', Logout);