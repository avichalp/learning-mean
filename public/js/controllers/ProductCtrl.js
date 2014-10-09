function ProductController($scope, Product) {
		     
    Product.getProduct(function (data) {
		   	   $scope.data = data;	    
		       });
    
}

angular
    .module('ProductCtrl', [])
//angular.module('cmsApp')
    .controller('ProductController', ProductController);