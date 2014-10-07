angular.module('LogoutService', []).factory('Logout', ['$http', function ($http) {
	    return {
		getLogout : function (callBack) {
		    $http.get('http://localhost:8080/api/logout/')
			.success(callBack);
		}
	    };
	}]);