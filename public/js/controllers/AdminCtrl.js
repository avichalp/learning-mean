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
                          
 // binding addAdmin object with view-template
    $scope.admin = {					   
	
	edit : false,

	editToggle : function () {
	    
	    if (this.edit == false)
		this.edit = true;
	    else
		this.edit = false;
	},
	
	list : function () {
	    
 	    Admin.getAdmin(function (data) {
    		       
    			       if (data.message === 'restricted area')
    				   window.location = "http://localhost:8080/login";					  	
    			      
			       $scope.admins = data;  
    			        
			   });    
	},
	

	logout : function (){
	
	    // using Admin service to send GET request on /logout
	    Admin.getLogout(function (data) {
				
				if (data.message === 'OK')
				    window.location = "http://localhost:8080/about";			     
			    });
	},

	submit : function (isValid) {
	    
	    if (isValid){
		// using Admin service to POST new admin details
		Admin.postAdmin(
		    {
			email : $scope.admin.email,
			password : $scope.admin.password
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
			window.location = "http://localhost:8080/admin";
		});
	}
    };		           

    $scope.home = {
	
	edit : false,
	
	editToggle : function () {
	    
	    if (this.edit == false)
		this.edit = true;
	    else
		this.edit = false;
	},

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
	
	edit : false,	

	editToggle : function () {
	    
	    if (this.edit == false)
		this.edit = true;
	    else
		this.edit = false;
	},

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
	    
	edit : false,
	
	editToggle : function () {
	    
	    if (this.edit == false)
		this.edit = true;
	    else
		this.edit = false;
	},

	submit : function (isValid) {
	    
	    if (isValid){
		// using Contact service to POST contactpage data
		Contact.postContact(
		    {
			contactText : $scope.contact.contactText,
			contactPhone : $scope.contact.contactPhone,
			contactEmail : $scope.contact.contactEmail,
			contactAddress : $scope.contact.contactAddress,
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
	
	edit : false,
	
	editToggle : function () {
	    
	    if (this.edit == false)
		this.edit = true;
	    else
		this.edit = false;
	},

	list : function () {
	    
	    Product.getProduct(function (data) {
				   $scope.products = data;
			       });
	},

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
			console.log(data);
			if (data.message === 'OK')   
			    window.location = "http://localhost:8080/product";
		    });
	    }
	},

	delete : function (product) {
	    
	    //var product_id = $scope.products.getKeyByVlaue(product);
	    var productKeys = Object.keys($scope.products);
	    for(var i=0; i<= productKeys.length -1; i++){
		if ($scope.products[productKeys[i]]['name'] === product['name']){
		    Product.deleteProduct(
			{
			    id : productKeys[i]
			}, function (data) {
			    if (data.message === 'OK')
				window.location = "http://localhost:8080/admin";
			});
		}
	    }		
		
		    
	}		
	
    };
            
    $scope.client = {			

	edit : false,

	editToggle : function () {
	    
	    if (this.edit == false)
		this.edit = true;
	    else
		this.edit = false;
	},
	
	list : function (){
	      
	    Client.getClient(function (data){			 
				 $scope.clients = data;		 
			     });

	},
	
	submit : function(isValid) {
	    
	    if (isValid){
		
		Client.postClient(
		    {
			name : $scope.client.name,
			description : $scope.client.description,
			imgUrl : $scope.client.url
			},
		    function (data) {
			console.log(data);
			if (data.message === 'OK')
			    window.location = "http://localhost:8080/client";
		    });
	    }
	},
	
	delete : function (client) {
	    
	    //var product_id = $scope.products.getKeyByVlaue(product);
	    var clientKeys = Object.keys($scope.clients);
	    for(var i=0; i<= clientKeys.length -1; i++){
		if ($scope.clients[clientKeys[i]]['name'] === client['name']){
		    Client.deleteClient(
			{
			    id : clientKeys[i]
			}, function (data) {
			    if (data.message === 'OK')
				window.location = "http://localhost:8080/admin" ;
			});
		}
	    }		
				    
	}
		    
    };

    $scope.admin.list();
    $scope.product.list();
    $scope.client.list();
    console.log($scope.admin);
    console.log($scope.product);
    console.log($scope.client);
    console.log($scope.contact);

    
}

angular
    .module('AdminCtrl', [])
    .controller('AdminController', AdminController );