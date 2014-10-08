var app = angular.module('AdminService', []);
app.factory('Admin',
	    ['$http', function ($http) {
		 
		 return {
		    
		     getAdmin : function (callBack) {
			 
			 $http.get('http://localhost:8080/api/admin/')
			     .success(callBack);
			 
		     },
		     
		     deleteAdmin : function (msg, callBack) {
			 
			 $http.delete('http://localhost:8080/api/admin/'+msg.user_id  )
			     .success(callBack);
			 
		     }
		 };
	   
	     }]);