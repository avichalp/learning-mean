function Client($http) {
    
    return {
	
	getClient : function () {
	    
	    return $http.get('http://localhost:8080/api/client/');
	},
	postClient : function (msg) {
			 
	    return $http.post('http://localhost:8080/api/client/', msg);
	},
	deleteClient : function (msg) {
	    
	    return $http.delete('http://localhost:8080/api/client/' + msg.id);
	}
		
    };
		
}

angular
    .module('ClientService', [])
    .factory('Client', Client);
