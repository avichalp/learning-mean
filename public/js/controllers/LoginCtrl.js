function LoginController($scope, Login) {
								   
    $scope.login = {
	
	submit : function (isValid) {
	    
	    if(isValid){
		Login.postLogin(
		    {
			email : $scope.login.email,
			password : $scope.login.password
		    },
		    function (data) {		
			if (data.message === 'OK')
			    window.location = "http://localhost:8080/admin";
		    });
	    }	    
	}
    };	    
}

angular
    .module('LoginCtrl', [])
    .controller('LoginController', LoginController);