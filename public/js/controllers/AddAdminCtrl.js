var app = angular.module('AddAdminCtrl', []);
app.controller('AddAdminController',
	       ['$scope', 'AddAdmin', 'AdminList', function ($scope, AddAdmin, AdminList) {
	    
		    $scope.registerForm = {};
		    $scope.registerForm.email = 'example@example.com';
		    $scope.registerForm.password = '';					   
		    $scope.registerForm.submit = function () {
					       
			var email = $scope.registerForm.email;
			var password = $scope.registerForm.password;
		
			AddAdmin.postAddAdmin({email : email, password : password }, function (data) {
						  
						  if (data.message === 'OK')
						      window.location = "http://localhost:8080/admin";
						  
					      });
		
		    };

		    $scope.admins = [];
		    AdminList.getAdminList(function (data){
					       console.log(data);
					       $scope.admins = data;
					   });
		
		}]);