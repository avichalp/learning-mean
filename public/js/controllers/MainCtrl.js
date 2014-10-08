var app = angular.module('MainCtrl', []);
app.controller('MainController',
	       ['$scope', 'Main', function($scope, Main) {
		     
		    Main.getHome(function (data) {			
				     $scope.data = data;
				 });
		}]);