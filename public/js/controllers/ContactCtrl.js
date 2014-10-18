function ContactController($scope, Contact) {
		    
    Contact.getContact(function (data) {			   
			   $scope.contactImgUrl = data['contactImgUrl'];
			   delete data['contactImgUrl'];
			   $scope.contactData = data;   
		       });

}

angular
    .module('ContactCtrl', [])
    .controller('ContactController', ContactController);