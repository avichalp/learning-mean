angular.module('AboutService', [])
    .factory('About', ['$http' ,function ($http) {
	    	    	    	  
		return {
		
		    getAbout : function (callBack) {
		    
			$http.get('http://localhost:8080/api/about/')
			    .success(callBack);
		
		    }  	  
	   
		};
	    
	    }]);