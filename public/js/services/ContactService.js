var app = angular.module('ContactService', []);
app.factory('Contact',
	    ['$http', function ($http) {
	    
		 return {

		     getContact : function (callBack) {
			
			 $http.get('http://localhost:8080/api/contact/')
			     .success(callBack);
		     },
		    
		     postContact : function (msg, callBack) {
			 
			 $http.post('http://localhost:8080/api/contact/', { contact : msg.contactText})
			     .success(callBack);
		     }
		 };
	
	     }]);