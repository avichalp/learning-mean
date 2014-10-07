angular.module('AdminCtrl', []).controller('AdminController', ['$scope', 'Logout', 'Admin', function ($scope, Logout, Admin) {
	    
	   
	     
	    $scope.redirect = function () {
		console.log('check3');
		window.location = "http://localhost:8080/addadmin"
	    }
	    
	    $scope.logout = function (){
		console.log('check4');
		Logout.getLogout(function (data) {
			console.log(data.status);
			if (data.status === 'loggedout')
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
	    
	    console.log('check2');
	   	    
	}]);