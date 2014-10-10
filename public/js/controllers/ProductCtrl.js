function ProductController($scope, Product) {
		     
    Product.getProduct(function (data) {
		   	   $scope.products = data;	    
		       });
    
}

angular
    .module('ProductCtrl', [])
    .controller('ProductController', ProductController);