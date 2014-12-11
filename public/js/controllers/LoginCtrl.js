function LoginController($scope, Admin) {

    $scope.login = Object.create(Object);
    $scope.login.submit = function (isValid) {
	
	 if(isValid){
		//using Admin service to POST login data
		Admin.postLogin( {
		    email : $scope.login.email,
		    password : $scope.login.password})
		 .success(function (data) {		
		     if (data.message === 'OK')
			 window.location = "http://localhost:8080/admin";
		 })
		 .error(function (data){
		     console.log("error->" + data);
		 });
	    }	

    };	    

}

angular
    .module('LoginCtrl', [])
    .controller('LoginController', LoginController);
