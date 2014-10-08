var app = angular.module('AdminCtrl', []);
app.controller('AdminController',
	       ['$scope', 'Logout', 'Admin', 'Main','About', 'Contact', 'Product', function ($scope, Logout, Admin, Main, About, Contact, Product) {
	
		    $scope.homeForm = {};
		    $scope.homeForm.homeText = '';
		    $scope.homeForm.submit = function () {
		    
			var homeText = $scope.homeForm.homeText;
			
			Main.postHome({ homeText: homeText }, function (data) {
					  if (data)
					      window.location = "http://localhost:8080/";
				      });
		    
		    };
		
		    $scope.aboutForm = {};
		    $scope.aboutForm.aboutText = '';
		    $scope.aboutForm.submit = function () {
		    
			var aboutText = $scope.aboutForm.aboutText;
			About.postAbout({ aboutText: aboutText }, function (data){
					    if (data)
						window.location = "http://localhost:8080/about";
					});
		    };
		
		    $scope.contactForm = {};
		    $scope.contactForm.contactText = '';
		    $scope.contactForm.submit = function () {
		    
			var contactText = $scope.contactForm.contactText;
			
			Contact.postContact({ contactText : contactText }, function (data) {
						if (data)
						    window.location = "http://localhost:8080/contact";
					    });
		    };
		
		    $scope.productForm = {};
		    $scope.productForm.productText = '';
		    $scope.productForm.submit = function () {
		    
			var productText = $scope.productForm.productText;
			
			Product.postProduct({ productText : productText }, function (data) {
						if (data)
						    window.location = "http://localhost:8080/product";
					    });
		    };
		    
		    $scope.addAdmin = function () {
		   
			window.location = "http://localhost:8080/addadmin";
					};
		    
		    $scope.logout = function (){
					    
			Logout.getLogout(function (data) {
					     
					     if (data.message === 'OK')
						 window.location = "http://localhost:8080/about";
					     
					 });
		    };

		    Admin.getAdmin(function (data) {
		  		    		    
				       if (data.message === 'OK'){
					   
					   document.getElementById('btn1').setAttribute('style','display:inline');
					   document.getElementById('btn2').setAttribute('style', 'display:inline');
				       }
							   
				       else 
					   window.location = "http://localhost:8080/login";
				   });
				    						    	  	   	    	    
		}]);