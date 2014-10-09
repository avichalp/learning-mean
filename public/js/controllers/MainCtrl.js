function MainController($scope, Main) {
		     
    Main.getHome(function (data) {			
		     $scope.data = data;
		 });
}

angular
    .module('MainCtrl', [])
//angular.module('cmsApp')
    .controller('MainController', MainController);