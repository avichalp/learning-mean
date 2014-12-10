function partial(func /*, 0..n args */) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
	var allArguments = args.concat(Array.prototype.slice.call(arguments));
	return func.apply(this, allArguments);
    };
}

function toggleAdmin(scope){

    scope.admin.edit ? scope.admin.edit=false : scope.admin.edit=true;
    scope.$apply();
}

function toggleHome(scope){

    scope.home.edit ? scope.home.edit=false : scope.home.edit=true;
    scope.$apply();
}

function toggleAbout(scope){

    scope.about.edit ? scope.about.edit=false : scope.about.edit=true;
    scope.$apply();
}

function toggleContact(scope){

    scope.contact.edit ? scope.contact.edit=false : scope.contact.edit=true;
    scope.$apply();
}

function toggleMouseEnterAdmin(){

    return {

	restrict: "A", 
	link : function(scope, element, attrs){
	    element.bind("mouseenter", partial(toggleAdmin, scope));
	    
	}
    }
}

function toggleClickAdmin(){

    return {
	
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggleAdmin, scope));
	}, 
    }
}

function toggleMouseEnterHome(){

    return {

	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("mouseenter", partial(toggleHome, scope));
	},
    }
}

function toggleClickHome(){

    return {

	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggleHome, scope));
	}
    }
}

function toggleMouseEnterAbout(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("mouseenter", partial(toggleAbout, scope));
	}
    }
}

function toggleClickAbout(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggleAbout, scope));
	}
    }
}

function toggleMouseEnterContact(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("mouseenter", partial(toggleContact, scope));
	}
    }
}

function toggleClickContact(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggleContact, scope));
	}
    }
}

angular
    .module("appDirectives", [])
    .directive("togglemouseenteradmin", toggleMouseEnterAdmin);

angular
    .module("appDirectives")
    .directive("toggleclickadmin", toggleClickAdmin);

angular
    .module("appDirectives")
    .directive("togglemouseenterhome", toggleMouseEnterHome);

angular
    .module("appDirectives")
    .directive("toggleclickhome", toggleClickHome);

angular
    .module("appDirectives")
    .directive("togglemouseenterabout", toggleMouseEnterAbout);

angular
    .module("appDirectives")
    .directive("toggleclickabout", toggleClickAbout);

angular
    .module("appDirectives")
    .directive("togglemouseentercontact", toggleMouseEnterContact);

angular
    .module("appDirectives")
    .directive("toggleclickcontact", toggleClickContact);
