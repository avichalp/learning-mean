Object.prototype.getKeyByValue = function( value ) {
    
    for( var prop in this ) {
	
        if( this.hasOwnProperty( prop ) ) {
	    
             if( this[ prop ] === value )
                 return prop;
        }
    }
}
	
var app = angular.module('AddAdminCtrl', []);
app.controller('AddAdminController',
	       ['$scope', 'AddAdmin', 'AdminList', 'Admin', function ($scope, AddAdmin, AdminList, Admin) {
	    
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
		    
		    AddAdmin.getAddAdmin(function (data) {
					     if (data.message !== 'OK')
						 window.location = "http://localhost:8080/login";
					 });

		    $scope.admins = [];
		    AdminList.getAdminList(function (data){
					       $scope.admins = data;
					   });
		    
		    $scope.delete = function (admin) {
			console.log(admin);
			var user_id = $scope.admins.getKeyByValue(admin);
			Admin.deleteAdmin({ user_id : user_id }, function (data){
					      if (data.message === 'OK')
						  window.location = "http://localhost:8080/admin";
					  });
		    };
		}]);