// defining a function to get keys from value
Object.prototype.getKeyByValue = function( value ) {
    
    for( var prop in this ) {
	
        if( this.hasOwnProperty( prop ) ) {
	    
             if( this[ prop ] === value )
                 return prop;
        }
    }
return undefined;
};

// Controller
function AddAdminController($scope, Admin) {
	
    // using Admin service to GET addadmin page 
    Admin.getAddAdmin(function (data) {
			     if (data.message !== 'OK')
				 window.location = "http://localhost:8080/login";
			 });    
                  
    // using Admin service to GET a list of existing admins
    Admin.getAdminList(function (data){
			       $scope.admins = data;
			   });
    
    // binding addAdmin object with view-template
    $scope.addAdmin = {					   
	
	submit : function (isValid) {
	    
	    if (isValid){
		// using Admin service to POST new admin details
		Admin.postAddAdmin(
		    {
			email : $scope.addAdmin.email,
			password : $scope.addAdmin.password
		    },
		    function (data) {				
			if (data.message === 'OK')
			    window.location = "http://localhost:8080/admin";				
		    });		
	    }
	},
	
	delete : function (admin) {
	 
	    var user_id = $scope.admins.getKeyByValue(admin);
	    //using Admin Service to DELETE specified admin
	    Admin.deleteAdmin(
		{
		    user_id : user_id
		},
		function (data){
		    if (data.message === 'OK')
			console.log('deleted');
		});
	}
    }; 
};
    
    
	
angular
    .module('AddAdminCtrl', [])
    .controller('AddAdminController', AddAdminController);