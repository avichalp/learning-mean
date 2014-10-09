function AdminController($scope, Logout, Admin, Main, About, Contact, Product) {		    		    		    
    
    Admin.getAdmin(function (data) {
		       
		       if (data.message !== 'OK')
			   window.location = "http://localhost:8080/login";					  
		   });
		    
    $scope.addAdmin = function () {		   
	window.location = "http://localhost:8080/addadmin";
    };
		    
    $scope.logout = function (){
					    
	Logout.getLogout(function (data) {
			     
			     if (data.message === 'OK')
				 window.location = "http://localhost:8080/about";
			     
			 });
    };
		    
    $scope.home = {
	
	submit : function (isValid) {
	    if (isValid){
		Main.postHome(
		    { 
			homeText: $scope.home.homeText
		    },
		    function (data) {
			if (data)
			    window.location = "http://localhost:8080/";
		    });
	   }
	}		    
    };
		
    $scope.about = {
	
	submit : function (isValid) {
	    if (isValid){			    
		About.postAbout(
		    { 
			aboutText: $scope.about.aboutText
		    },
		    function (data){
			if (data)
			    window.location = "http://localhost:8080/about";
		    });
	   } 
	}
    };
    
    $scope.contact = {
	    
	submit : function (isValid) {
	    if (isValid){
		Contact.postContact(
		    {
			contactText : $scope.contact.contactText
		    },
		    function (data) {
			if (data)
			    window.location = "http://localhost:8080/contact";
		    });
	   } 
	}
    };	

    $scope.product = {
	
	submit : function (isValid) {
	    if (isValid){  
		Product.postProduct(
		    {
			productText : $scope.product.productText
		    },
		    function (data) {
			if (data)
			    window.location = "http://localhost:8080/product";
		    });
	    }
	}
    };    
}

angular
    .module('AdminCtrl', [])
    .controller('AdminController', AdminController );