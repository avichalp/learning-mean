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
   
    $scope.admin = Object.create(page);
    $scope.admin.list = function () {
	
	// using Admin service to GET admin-list
	Admin.getAdmin()
	    .success(function (data) {
    		if (data.message === 'restricted area')
    		    window.location = "http://localhost:8080/login";					  	
    		
		$scope.admins = data;
	    })
	    .error(function(data){
		console.log("error->" + data);
	    });
    };
    $scope.admin.logout = function (){
	
	// using Admin service to send GET request on /logout
	Admin.getLogout()
	    .success(function (data) {
		if (data.message === 'OK')
		    window.location = "http://localhost:8080/";			     
	    })
	    .error(function (data){
		console.log("error->" + data);
	    });
    
    };
    $scope.admin.submit = function (isValid) {
	    
	if (isValid){
	   
	    // using Admin service to POST new admin details
	    Admin.postAdmin({
		email : this.email,
		password : this.password})
		.success(function (data) {				
		    if (data.message === 'OK')
			$scope.admin.list();				
		})
		.error(function (data){
		    console.log("error->" + data);
		});
	}
   
    };
    $scope.admin.delete =  function (admin) {
	 
	var user_id = $scope.admins.getKeyByValue(admin);
	
	//using Admin Service to DELETE specified admin
	Admin.deleteAdmin({user_id : user_id})
	    .success(function (data){
		if (data.message === 'OK')
		    $scope.admin.list();	
	    })
	    .error(function (data){
		console.log("error->" + data);
	    });
   
    };		           
    
    $scope.home = Object.create(page);
    $scope.home.submit = function (isValid) {
	    
	if (isValid){
	    
	    // using Main service to POST homepage data
	    Main.postHome({ 
		homeText: this.homeText,
		homeImgUrl: this.homeUrl})
		.success(function (data) {
		    if (data)
			window.location = "http://localhost:8080/";
		})
		.error(function (data){
		    console.log("error->" + data);
		});	
	}
    
    };	
   
    $scope.about = Object.create(page);		
    $scope.about.submit = function (isValid) {
	    
	if (isValid){			    
	    
	    // using About service to POST aboutpage data
	    About.postAbout({ 
		aboutText: this.aboutText,
		aboutImgUrl: this.aboutUrl})
		.success(function (data){
		    if (data)
			window.location = "http://localhost:8080/";
		})
		.error(function (data){
		    console.log("error->" + data);
		});
	} 
    
    };
	
    $scope.contact = Object.create(page);
    $scope.contact.submit = function (isValid) {
	    
	if (isValid){
	    
	    // using Contact service to POST contactpage data
	    Contact.postContact({
		contactText : this.contactText,
		contactPhone : this.contactPhone,
		contactEmail : this.contactEmail,
		contactAddress : this.contactAddress,
		contactImgUrl : this.contactUrl})
		.success(function (data) {
		    if (data)
			window.location = "http://localhost:8080/";			    
		})
		.error(function (data){
		    console.log("error->" + data); 
		});
	} 
    
    };	
    
    $scope.product = Object.create(page, {name : {writable: true, configurable: true} });
    $scope.product.list = function () {
	
	// Product service to GET product-list    
	Product.getProduct()
	    .success(function (data) {
		$scope.products = data;
	    })
	    .error(function (data) {
		console.log("error ->" + data);
	    });
    
    };
    
    $scope.product.submit = function (isValid) {
	    
	if (isValid){
	   
	    // using Product service to POST productpage data
	    Product.postProduct({
		name : this.name,
		description : this.description,
		imgUrl : this.url})
		.success(function (data) {
		    if (data.message === 'OK')   
			$scope.product.list();
		})
		.error(function (data) {
		    console.log("error->" + data);
		});
	}
    
    };   
    $scope.product.delete = function (product) {
	    
	var productKeys = Object.keys($scope.products);
	for(var i=0; i<= productKeys.length -1; i++){
	    if ($scope.products[productKeys[i]]['name'] === product['name']){
		
		// Product service to DELETE product
		Product.deleteProduct({ id : productKeys[i]})
		    .success(function (data) {
			if (data.message === 'OK')
			    $scope.product.list();
		    })
		    .error(function (data){
			console.log("error->" + data);
		    });
	    }
	}		
    
    };		 	
  
    $scope.client = Object.create(page, {name : {writable: true, configurable: true}} );
    $scope.client.list =  function (){
	
	// Client service to GET client-list
	Client.getClient()
	    .success(function (data){			 
			     $scope.clients = data;		 
	    })
	    .error(function (data){
		console.log("error->" + data);
	    });
	    
    };
    $scope.client.submit = function(isValid) {
	    
	if (isValid){
	    
	    // Client service to POST new client data 
	    Client.postClient({
		    name : this.name,
		    description : this.description,
		    imgUrl : this.url})
		.success(function (data) {
		    console.log(data);
		    if (data.message === 'OK')
			$scope.client.list();
		})
		.error(function (data){
		    console.log("error->" + data);
		});
	}
    
    };    
    $scope.client.delete = function (client) {
	    
	var clientKeys = Object.keys($scope.clients);
	for(var i=0; i<= clientKeys.length -1; i++){
	    if ($scope.clients[clientKeys[i]]['name'] === client['name']){
		
		// Client service to DELETE client
		Client.deleteClient({ id : clientKeys[i]})
		    .success(function (data) {
			if (data.message === 'OK')
			    $scope.client.list();
		    })
		    .error(function (data){
			console.log('error->' + data);
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
