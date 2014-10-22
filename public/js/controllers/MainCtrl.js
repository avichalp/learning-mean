function MainController($scope, Main, About, Contact) {
		     
    Main.getHome(function (data) {			
		     $scope.homeData = data;
		 });

    About.getAbout(function (data) {							   
		       $scope.aboutData = data;
		   });

    Contact.getContact(function (data) {			   
			   $scope.contactImgUrl = data['contactImgUrl'];
			   delete data['contactImgUrl'];
			   $scope.contactData = data;   
		       });

}

angular
    .module('MainCtrl', [])
    .controller('MainController', MainController);


