angular.module('adminAppRoutes',[]).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	    
	    $routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			    controller: 'MainController'
			    })
		.when('/login', {
			templateUrl: 'views/login.html',
			    controller: 'LoginController'
			    })
		.when('/admin',{
			templateUrl: 'views/admin.html',
			    controller: 'AdminController'
			    });
	    
	    $locationProvider.html5Mode(true);
	}]);