function MainController($scope, Main) {
		     
    Main.getHome(function (data) {			
		     $scope.data = data;
		 });
}

angular
    .module('MainCtrl', [])
    .controller('MainController', MainController);