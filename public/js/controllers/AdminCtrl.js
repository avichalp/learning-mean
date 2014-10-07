angular.module('AdminCtrl', []).controller('AdminController', ['$scope', function ($scope) {
	    $scope.redirect = function () {
		window.location = "http://localhost:8080/addadmin"
	    }
	}]);