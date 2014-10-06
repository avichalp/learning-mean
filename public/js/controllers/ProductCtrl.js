angular.module ('ProductCtrl', []).controller ('ProductController', ['$scope', 'Product', function ($scope, Product) {
    
	Product.getProduct(function (data) {
		$scope.data = data;
	    });
	
    }]);