function MainController($scope, Main, About, Contact) {
		     
    Main.getHome()
	.success(function (data) {			
	    $scope.homeData = data;
	})
	.error(function (data) {
	    console.log("error->" + data);
	});

    About.getAbout()
	.success(function (data) {							   
	    $scope.aboutData = data;
	})
	.error(function (data){
	    console.log("error->" + data);
	});

    Contact.getContact()
	.success(function (data) {			   
	    $scope.contactImgUrl = data['contactImgUrl'];
	    delete data['contactImgUrl'];
	    $scope.contactData = data;   
	})
	.error(function (data){
	    console.log("error-> " + data);
	});
}

angular
    .module('MainCtrl', [])
    .controller('MainController', MainController);
