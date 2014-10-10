function Main($http) {
    
    return {
	
	getHome : function (callBack) {
	    
	    $http.get('http://localhost:8080/api/home/')
		.success(callBack);		    
	    
	},	
		    
	postHome : function (msg, callBack) {
			
	    $http.post('http://localhost:8080/api/home/', msg)
		.success(callBack);
	}
    };
    
}

angular
    .module('MainService', [])
    .factory('Main', Main );