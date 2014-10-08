angular.module('ContactCtrl', [])
    .controller('ContactController', ['$scope','Contact', function($scope, Contact) {
	
		Contact.getContact(function (data) {
			
			$scope.data = data;
		    
		    });

	    }]);