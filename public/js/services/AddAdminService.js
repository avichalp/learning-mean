var app = angular.module('AddAdminService', []);
app.factory('AddAdmin',
	    ['$http', function ($http) {
	    
		 return {
		     
		     getAddAdmin : function (callBack) {
			 $http.get('http://localhost:8080/api/addadmin/')
			     .success(callBack);
		     },
		
		     postAddAdmin : function (msg, callBack) {		    
			
			 $http.post('http://localhost:8080/api/addadmin/', {email : msg.email, password : msg.password})
			     .success(callBack);		
		
		     }
		 };

	     }]);