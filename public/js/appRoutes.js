var app = angular.module('appRoutes', []);
app.config (['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

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
		  
	     }]);