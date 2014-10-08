var app = angular.module('AdminListService', []);
app.factory('AdminList',
	    ['$http', function ($http) {
		 
		 return {
		     getAdminList : function (callBack){
			 $http.get('http://localhost:8080/api/adminlist/')
			     .success(callBack);
		     }
		
		 };
	     }
	     ]);