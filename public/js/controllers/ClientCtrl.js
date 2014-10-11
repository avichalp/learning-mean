angular.module('ClientCtrl', []).controller('ClientController', function ($scope, Client){
	
						Client.getClient(function (data) {
		   						       $scope.clients = data;	    
								   });
					    } );
    
