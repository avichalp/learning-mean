var app = angular.module('AdminService', []);
app.factory('Admin',
	    ['$http', function ($http) {
		 
		 return {
		    
		     getAdmin : function (callBack) {
			 
			 $http.get('http://localhost:8080/api/admin/')
			     .success(callBack);
			 
		     }
		 };
	   
	     }]);