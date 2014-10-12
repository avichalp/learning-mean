

// Controller
function AddAdminController($scope, Admin) {
	
    // using Admin service to GET addadmin page 
    Admin.getAddAdmin(function (data) {
			     if (data.message !== 'OK')
				 window.location = "http://localhost:8080/login";
			 });       
};
    
    
	
angular
    .module('AddAdminCtrl', [])
    .controller('AddAdminController', AddAdminController);