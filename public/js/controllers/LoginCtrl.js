angular.module('LoginCtrl', []).controller('LoginController', ['$scope', 'Login', function ($scope, Login) {
	
	    $scope.form = {};
	    $scope.form.email = 'pandeyavichal7@gmail.com';
	    $scope.form.password = '';
	    
	    $scope.form.submit = function () {
		
       		email = $scope.form.email;
		password = $scope.form.password;
		
		Login.postLogin(function (data) {
			console.log(data.message);
			if (data.message === 'OK')
			    window.location = "http://localhost:8080/about";
		    } ,{ email : email, password : password });
		
	    }
    }]);