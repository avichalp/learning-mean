function config($routeProvider, $locationProvider) {

    $routeProvider
	.when('/', {
		  templateUrl: 'views/home.html',
		  controller: 'MainController'
	      })
	.when('/about', {
		  templateUrl: 'views/about.html',
		  controller: 'AboutController'
	      })
	.when('/contact', {
		  templateUrl: 'views/contact.html',
		  controller: 'ContactController'	
	      })
	.when('/product', {
		  templateUrl: 'views/product.html',
		  controller: 'ProductController'
	      })
	.when('/client', {
		  templateUrl : 'views/client.html',
		  controller : 'ClientController'
	      })
	.when('/login', {
		  templateUrl: 'views/login.html',
		  controller: 'LoginController'
	      })
	.when('/admin', {
		  templateUrl: 'views/admin.html',
		  controller: 'AdminController' 
	      })
	.when('/addadmin', {
		  templateUrl: 'views/addadmin.html',
		  controller: 'AddAdminController'
	      });
    
    $locationProvider.html5Mode(true);
    
}

angular
    .module('appRoutes', [])
    .config(config);

