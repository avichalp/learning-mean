angular.module('AdminCtrl', [])
    .controller('AdminController', ['$scope', 'Logout', 'Admin', function ($scope, Logout, Admin) {
	    
		$scope.addAdmin = function () {
		   
		    window.location = "http://localhost:8080/addadmin"
		}
	    
		$scope.logout = function (){
		    
		    Logout.getLogout(function (data) {
			    
			    if (data.message === 'OK')
				window.location = "http://localhost:8080/about"
				  
				    });
		}
	    		
		Admin.getAdmin(function (data) {
		  		    		    
			if (data.message === 'OK'){
			    
			    document.getElementById('btn1').setAttribute('style','display:inline');
			    document.getElementById('btn2').setAttribute('style', 'display:inline');
			}
		    
			else 
			    window.location = "http://localhost:8080/login";
		    });	    	  	   	    
	    
	    }]);