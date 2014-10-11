function ClientController ($scope, Client){
    
    Client.getClient(function (data) {
		   	 $scope.clients = data;	    
		     });
}
    
angular
    .module('ClientCtrl', [])
    .controller('ClientController', ClientController);