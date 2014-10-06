angular.module('MainService', []).factory('Main', ['$http', function ($http) {
	    return {
		getHome : function (callBack) {
		    $http.get('http://localhost:8080/api/home/')
		    .success(callBack);
			}	
	    };
	}]);