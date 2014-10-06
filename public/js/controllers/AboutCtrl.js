angular.module('AboutCtrl', []).controller('AboutController', ['$scope','About', function ($scope, About) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	About.getAbout(function (data) {
		$scope.data = data;
	    });	    
    }]);