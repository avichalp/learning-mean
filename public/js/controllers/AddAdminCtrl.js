angular.module('AddAdminCtrl', [])
    .controller('AddAdminController', ['$scope', 'AddAdmin',  function ($scope, AddAdmin) {
	    
		$scope.registerForm = {};
		$scope.registerForm.email = 'example@example.com';
		$scope.registerForm.password = '';

		$scope.registerForm.submit = function () {
		    
		    email = $scope.registerForm.email;
		    password = $scope.registerForm.password;
		
		    AddAdmin.postAddAdmin({email : email, password : password }, function (data) {
			    
			    if (data.message === 'OK')
				window.location = "http://localhost:8080/admin";
			    
			});
		
		}
		
	    }]);