function AboutController($scope, About) {
    
    About.getAbout(function (data) {							   
		       $scope.data = data;
		   });
}

angular
    .module('AboutCtrl',[])
    .controller('AboutController', AboutController);