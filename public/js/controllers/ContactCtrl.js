var app = angular.module('ContactCtrl', []);
app.controller('ContactController',
	       ['$scope','Contact', function($scope, Contact) {
					  
		    Contact.getContact(function (data) {
					   $scope.data = data;		 
				       });

		}]);