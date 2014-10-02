angular.module ('appRoutes', []).config (['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	    $routeProvider

		// home page
		.when ('/', {
			templateUrl: 'views/home.html',
			    controller: 'MainController'
			    })

		.when ('/about', {
			templateUrl: 'views/about.html',
			    controller: 'AboutController'
			    })

		.when ('/contact', {
			templateUrl: 'views/contact.html',
			    controller: 'ContactController'	
			    })
		.when ('/product', {
			templateUrl: 'views/product.html',
			    controller: 'ProductController'
			    });
	    

	$locationProvider.html5Mode(true);

}]);