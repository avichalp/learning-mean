function ClientController ($scope, Client){
    
    Client.getClient()
	.success(function (data){
	    $scope.clients = data;
	})
	.error(function (data){
	    console.log("something went wrong:" + data);
	});
}
    
angular
    .module('ClientCtrl', [])
    .controller('ClientController', ClientController);
