function ContactController($scope, Contact) {
		    
    Contact.getContact(function (data) {
			   $scope.data = data;		 
		       });
}

angular
    .module('ContactCtrl', [])
//angular.module('cmsApp')
    .controller('ContactController', ContactController);