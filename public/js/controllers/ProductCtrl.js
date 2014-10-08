var app = angular.module ('ProductCtrl', []);
app.controller ('ProductController',
		['$scope', 'Product', function ($scope, Product) {
		     
		     Product.getProduct(function (data) {
		   			    $scope.data = data;	    
					});
		     
		 }]);