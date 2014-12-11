function Main($http) {
    
    return {
	
	getHome : function () {
	    return $http.get('http://localhost:8080/api/home/');
	},	
		    
	postHome : function (msg) {
	    return $http.post('http://localhost:8080/api/home/', msg);
	}
    };
    
}

angular
    .module('MainService', [])
    .factory('Main', Main );
