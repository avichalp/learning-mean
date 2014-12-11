function Contact($http) {
	    
    return {
	getContact : function (){
	   return  $http.get('http://localhost:8080/api/contact/');
	},
		    
	postContact : function (msg) {
	   return  $http.post('http://localhost:8080/api/contact/',  msg);
	}
    };
    
}

angular
    .module('ContactService', [])
    .factory('Contact', Contact);
