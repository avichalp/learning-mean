function ProductController($scope, Product) {
		     
    Product.getProduct()
	.success(function (data) {
	    $scope.products = data;	    
	    console.log(data);
	})
	.error(function (data){
	    console.log("error->" + data);
	});
    
}

angular
    .module('ProductCtrl', [])
    .controller('ProductController', ProductController);
