function About($http) {
	    	    	    	  
    return {
		    
	getAbout : function () {   
	    return $http.get('http://localhost:8080/api/about/');
	},
	postAbout : function (msg) {
	    return $http.post('http://localhost:8080/api/about/',  msg);
	}
		    	   
    };	    
}

angular
    .module('AboutService', [])
    .factory('About', About);
