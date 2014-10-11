function Client($http) {
    
    return {
	
	getClient : function (callBack) {
			
	    $http.get('http://localhost:8080/api/client/')
		.success(callBack);
	},
	postClient : function (msg, callBack) {
			 
	    $http.post('http://localhost:8080/api/client/', msg)
		.success(callBack);
	} 
		
    };
		
}

angular
    .module('ClientService', [])
    .factory('Client', Client);