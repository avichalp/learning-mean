function ContactController($scope, Contact) {
		    
    Contact.getContact(function (data) {			   
			   $scope.imgUrl = data['contactImgUrl'];
			   delete data['contactImgUrl'];
			   $scope.data = data;
		       });
}

angular
    .module('ContactCtrl', [])
    .controller('ContactController', ContactController);