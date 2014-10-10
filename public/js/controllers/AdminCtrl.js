// controller
function AdminController($scope,  Admin, Main, About, Contact, Product) {		    		    		    
    
    // using Admin service to GET admin page   
    Admin.getAdmin(function (data) {
		       
		       if (data.message !== 'OK')
			   window.location = "http://localhost:8080/login";					  
		   });
		    
    $scope.addAdmin = function () {		   
	window.location = "http://localhost:8080/addadmin";
    };
		    
    $scope.logout = function (){
	
	// using Admin service to send GET request on /logout
	Admin.getLogout(function (data) {
			     
			     if (data.message === 'OK')
				 window.location = "http://localhost:8080/about";			     
			 });
    };
		    
    $scope.home = {
	
	submit : function (isValid) {
	    
	    if (isValid){
		// using Main service to POST homepage data
		Main.postHome(
		    { 
			homeText: $scope.home.homeText,
			homeImgUrl: $scope.home.homeUrl
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
		// using About service to POST aboutpage data
		About.postAbout(
		    { 
			aboutText: $scope.about.aboutText,
			aboutImgUrl: $scope.about.aboutUrl 
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
		// using Contact service to POST contactpage data
		Contact.postContact(
		    {
			contactText : $scope.contact.contactText,
			contactImgUrl : $scope.contact.contactUrl
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
		// using Product service to POST productpage data
		Product.postProduct(
		    {
			name : $scope.product.name,
			description : $scope.product.description,
			imgUrl : $scope.product.url
			
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