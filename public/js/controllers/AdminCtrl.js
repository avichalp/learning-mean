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
		    
    //try ng-init ?
    $scope.homeForm = {};
    $scope.homeForm.homeText = '';
    $scope.homeForm.submit = function () {
		    
	var homeText = $scope.homeForm.homeText;
	
	Main.postHome(
	    { 
		homeText: homeText
	    },
	    function (data) {
		if (data)
		    window.location = "http://localhost:8080/";
	    });
		    
    };
		
    $scope.aboutForm = {};
    $scope.aboutForm.aboutText = '';
    $scope.aboutForm.submit = function () {
	
	var aboutText = $scope.aboutForm.aboutText;
	About.postAbout(
	    { 
		aboutText: aboutText
	    },
	    function (data){
		if (data)
		    window.location = "http://localhost:8080/about";
	    });
    };
    
    $scope.contactForm = {};
    $scope.contactForm.contactText = '';
    $scope.contactForm.submit = function () {
	
	var contactText = $scope.contactForm.contactText;			
	Contact.postContact(
	    {
		contactText : contactText
	    },
	    function (data) {
		if (data)
		    window.location = "http://localhost:8080/contact";
	    });
    };
		
    $scope.productForm = {};
    $scope.productForm.productText = '';
    $scope.productForm.submit = function () {
		    
	var productText = $scope.productForm.productText;			
	Product.postProduct(
	    {
		productText : productText
	    },
	    function (data) {
		if (data)
		    window.location = "http://localhost:8080/product";
	    });
    };
}

angular
    .module('AdminCtrl', [])
    .controller('AdminController', AdminController );