var app = angular.module('AboutService', []);
app.factory('About',
	    ['$http' ,function ($http) {
	    	    	    	  
		 return {
		
		     getAbout : function (callBack) {
		    
			 $http.get('http://localhost:8080/api/about/')
			     .success(callBack);
		
		     },
		     postAbout : function (msg, callBack) {
			
			 $http.post('http://localhost:8080/api/about/', { about : msg.aboutText })
			     .success(callBack);
		     }
		    	   
		 };
	    
	    }]);