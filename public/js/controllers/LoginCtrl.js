function LoginController($scope, Login) {
								   
    $scope.loginForm = {};
    $scope.loginForm.email = '';
    $scope.loginForm.password = '';
    $scope.loginForm.submit = function () {
		
       	var email = $scope.loginForm.email;
	var password = $scope.loginForm.password;
	
	Login.postLogin({ email : email, password : password }, function (data) {
			    
			    if (data.message === 'OK')
				window.location = "http://localhost:8080/admin";
			});		
								       
    };	    
}

angular
    .module('LoginCtrl', [])
//angular.module('cmsApp')
    .controller('LoginController', LoginController);