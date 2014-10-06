angular.module('ContactCtrl', []).controller('ContactController', ['$scope','Contact', function($scope, Contact) {

	$scope.tagline = 'The square root of life is pi!';
	Contact.getContact(function (data) {
		$scope.data = data;
	    });

}]);