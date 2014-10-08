angular.module('MainService', [])
    .factory('Main', ['$http', function ($http) {
		
		return {
		    
		    getHome : function (callBack) {
			
			$http.get('http://localhost:8080/api/home/')
			    .success(callBack);		    
		       
		    },	
		    
			postHome : function (msg, callBack) {
			
			$http.post('http://localhost:8080/api/home/', { home : msg.homeText })
			    .success(callBack);
		    }
		};
	
	    }]);