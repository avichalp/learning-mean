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

// controller
function AdminController($scope,  Admin, Main, About, Contact, Product, Client) {		    		    		    

    var page = Object.create(Object);    
    page.edit = false;
    page.editToggle = function () {
	if (this.edit == false)
	    this.edit = true;
	else
	    this.edit = false;	
    };
   
    $scope.admin = Object.create(page);
    $scope.admin.list = function () {
	
	Admin.getAdmin(function (data) {
    		       
    			   if (data.message === 'restricted area')
    			       window.location = "http://localhost:8080/login";					  	
    			   
			   $scope.admins = data;
			  
		       });    
    };
    $scope.admin.logout = function (){
	
	// using Admin service to send GET request on /logout
	Admin.getLogout(function (data) {
			    
			    if (data.message === 'OK')
				window.location = "http://localhost:8080/about";			     
			});
    };
    $scope.admin.submit = function (isValid) {
	    
	if (isValid){
	    // using Admin service to POST new admin details
	    Admin.postAdmin(
		{
		    email : this.email,
		    password : this.password
		},
		function (data) {				
		    if (data.message === 'OK')
			$scope.admin.list();				
		    }
	    );
	}
    };
    $scope.admin.delete =  function (admin) {
	 
	var user_id = $scope.admins.getKeyByValue(admin);
	//using Admin Service to DELETE specified admin
	Admin.deleteAdmin(
	    {
		user_id : user_id
	    },
	    function (data){
		
		if (data.message === 'OK')
		    $scope.admin.list();	
	    });
    };		           
    
    $scope.home = Object.create(page);
    $scope.home.submit = function (isValid) {
	    
	if (isValid){
	    // using Main service to POST homepage data
	    Main.postHome(
		{ 
		    homeText: this.homeText,
		    homeImgUrl: this.homeUrl
		},
		function (data) {
		    if (data)
			window.location = "http://localhost:8080/";
		});
	}
    };	
   
    $scope.about = Object.create(page);		
    $scope.about.submit = function (isValid) {
	    
	if (isValid){			    
	    // using About service to POST aboutpage data
	    About.postAbout(
		{ 
		    aboutText: this.aboutText,
		    aboutImgUrl: this.aboutUrl 
		},
		function (data){
		    if (data)
			window.location = "http://localhost:8080/about";
		});
	} 
    };
	
    $scope.contact = Object.create(page);
    $scope.contact.submit = function (isValid) {
	    
	if (isValid){
	    // using Contact service to POST contactpage data
	    Contact.postContact(
		{
		    contactText : this.contactText,
		    contactPhone : this.contactPhone,
		    contactEmail : this.contactEmail,
		    contactAddress : this.contactAddress,
		    contactImgUrl : this.contactUrl
		},
		function (data) {
		    if (data)
			window.location = "http://localhost:8080/contact";			    
		});
	} 
    };	
    
    $scope.product = Object.create(page, {name : {writable: true, configurable: true} });
    $scope.product.list = function () {
	    
	Product.getProduct(function (data) {
			       $scope.products = data;
			   });
    };
    
    $scope.product.submit = function (isValid) {
	    
	if (isValid){
	    // using Product service to POST productpage data
	    Product.postProduct(
		{
		    name : this.name,
		    description : this.description,
		    imgUrl : this.url
		    
		},
		function (data) {
		    console.log(data);
		    if (data.message === 'OK')   
			$scope.product.list();
		});
	}
    };   
    $scope.product.delete = function (product) {
	    
	//var product_id = $scope.products.getKeyByVlaue(product);
	var productKeys = Object.keys($scope.products);
	for(var i=0; i<= productKeys.length -1; i++){
	    if ($scope.products[productKeys[i]]['name'] === product['name']){
		Product.deleteProduct(
		    {
			id : productKeys[i]
		    }, function (data) {
			if (data.message === 'OK')
			    $scope.product.list();
		    });
	    }
	}		
    };		 	
  
    $scope.client = Object.create(page, {name : {writable: true, configurable: true}} );
    $scope.client.list =  function (){
	      
	Client.getClient(function (data){			 
			     $scope.clients = data;		 
			 });
    };
    $scope.client.submit = function(isValid) {
	    
	if (isValid){
		
	    Client.postClient(
		{
		    name : this.name,
		    description : this.description,
		    imgUrl : this.url
		},
		function (data) {
		    console.log(data);
		    if (data.message === 'OK')
			$scope.client.list();
		});
	}
    };    
    $scope.client.delete = function (client) {
	    
	//var product_id = $scope.products.getKeyByVlaue(product);
	var clientKeys = Object.keys($scope.clients);
	for(var i=0; i<= clientKeys.length -1; i++){
	    if ($scope.clients[clientKeys[i]]['name'] === client['name']){
		Client.deleteClient(
		    {
			id : clientKeys[i]
		    }, function (data) {
			if (data.message === 'OK')
			    $scope.client.list();
		    });
	    }
	}		
				    
    };

    $scope.admin.list();
    $scope.product.list();
    $scope.client.list();
    
}

angular
    .module('AdminCtrl', [])
    .controller('AdminController', AdminController );