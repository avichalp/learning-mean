angular.module ('ProductCtrl', []).controller ('ProductController', ['$scope', 'Product', function ($scope, Product) {
    
	$scope.tagline = 'products';
	Product.getProduct(function (data) {
		$scope.data = data;
	    });
	
    }]);