function ProductController($scope, Product) {
		     
    Product.getProduct(function (data) {
		   	   $scope.data = data;	    
		       });
    
}

angular
    .module('ProductCtrl', [])
    .controller('ProductController', ProductController);