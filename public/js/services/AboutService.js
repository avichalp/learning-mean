function About($http) {
	    	    	    	  
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
}

angular
    .module('AboutService', [])
    .factory('About', About);