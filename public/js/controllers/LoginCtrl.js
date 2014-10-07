angular.module('LoginCtrl', []).controller('LoginController', ['$scope', 'Login', function ($scope, Login) {
	
	    $scope.loginForm = {};
	    $scope.loginForm.email = 'pandeyavichal7@gmail.com';
	    $scope.loginForm.password = '';
	    
	    $scope.loginForm.submit = function () {
		
       		email = $scope.loginForm.email;
		password = $scope.loginForm.password;
		
		Login.postLogin(function (data) {
			console.log(data.message);
			if (data.message === 'OK')
			    window.location = "http://localhost:8080/admin";
		    } ,{ email : email, password : password });
		
	    }
    }]);