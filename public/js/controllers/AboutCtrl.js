function AboutController($scope, About) {
    About.getAbout(function (data) {							   
		       $scope.data = data;
		   });
}

angular
    .module('AboutCtrl',[])
//angular
//    .module('cmsApp')
    .controller('AboutController', AboutController);