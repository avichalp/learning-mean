function ContactController($scope, Contact) {
		    
    Contact.getContact(function (data) {
			   console.log(data);			   
			   $scope.contactImgUrl = data['contactImgUrl'];
			   delete data['contactImgUrl'];
			   console.log(data);
			   $scope.contactData = data;
			   
		       });
}

angular
    .module('ContactCtrl', [])
    .controller('ContactController', ContactController);