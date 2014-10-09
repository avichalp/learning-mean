function Login ($http) {
    
    return {
	
	postLogin : function (msg, callBack) {
	    
	    $http.post('http://localhost:8080/api/login/', {email : msg.email, password : msg.password })
		.success(callBack);
	    
	}
	
    };
	
}

angular
    .module('LoginService', [])
//angular.module('cmsApp')
    .factory('Login', Login);