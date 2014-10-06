angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Main', function($scope, Main) {

	$scope.tagline = 'To the moon and back!';	
	Main.getHome(function (data) {
		$scope.data = data;
	    });
}]);