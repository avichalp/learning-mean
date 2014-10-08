angular.module('LoginCtrl', []).controller('LoginController', ['$scope', 'Login', function ($scope, Login) {
	
	    $scope.loginForm = {};
	    $scope.loginForm.email = 'example@example.com';
	    $scope.loginForm.password = '';
	    
	    $scope.loginForm.submit = function () {
		
       		email = $scope.loginForm.email;
		password = $scope.loginForm.password;
		
		Login.postLogin({ email : email, password : password }, function (data) {
		       
			if (data.message === 'OK')
			    window.location = "http://localhost:8080/admin";
		    });		
	    
	    }
    
	}]);