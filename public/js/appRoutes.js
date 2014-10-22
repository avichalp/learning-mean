function config($routeProvider, $locationProvider) {

    $routeProvider
	.when('/', {
		  templateUrl: 'views/home.html',
		  controller: 'MainController'
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
	      });
    
    $locationProvider.html5Mode(true);
    
}

angular
    .module('appRoutes', [])
    .config(config);

