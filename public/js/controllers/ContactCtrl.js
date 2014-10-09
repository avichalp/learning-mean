function ContactController($scope, Contact) {
		    
    Contact.getContact(function (data) {
			   $scope.data = data;		 
		       });
}

angular
    .module('ContactCtrl', [])
    .controller('ContactController', ContactController);