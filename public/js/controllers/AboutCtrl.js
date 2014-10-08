var app = angular.module('AboutCtrl',[]);
app.controller('AboutController', 
	       ['$scope','About', function ($scope, About) {
		    About.getAbout(function (data) {							   
				       $scope.data = data;							 						      });
		}]);