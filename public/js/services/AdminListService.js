function AdminList($http) {
		 
    return {
	getAdminList : function (callBack){
	    $http.get('http://localhost:8080/api/adminlist/')
		.success(callBack);
	}
	
    };
}

angular
    .module('AdminListService', [])
//angular.module('cmsApp')
    .factory('AdminList', AdminList);