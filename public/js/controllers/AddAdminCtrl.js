angular.module('AddAdminCtrl', []).controller('AddAdminController', ['$scope', 'AddAdmin',  function ($scope, AddAdmin) {
	    
	    $scope.registerForm = {};
	    $scope.registerForm.email = '';
	    $scope.registerForm.password = '';

	    $scope.registerForm.submit = function () {
		email = $scope.registerForm.email;
		password = $scope.registerForm.password;
		
		AddAdmin.postAddAdmin( function (data) {
			console.log(data.message);
			if (data.message === 'admin-added')
			    window.location = "http://localhost:8080/admin";
			    
		    }, {email : email, password : password });
	    }
	    
	}]);