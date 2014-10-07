angular.module('LoginService', []).factory('Login', ['$http', function ($http) {
	
	    return {
		postLogin : function (callBack, msg) {
		    $http.post('http://localhost:8080/api/login/', {email : msg.email, password : msg.password })
			.success(callBack);
		}
	    };
	}]);