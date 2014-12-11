function partial(func /*, 0..n args */) {

    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
	var allArguments = args.concat(Array.prototype.slice.call(arguments));
	return func.apply(this, allArguments);
    };

}

function toggle(scope, arg){

    arg.edit ? arg.edit=false : arg.edit=true;
    scope.$apply();

}

function toggleMouseEnterAdmin(){

    return {
	restrict: "A",
	link : function(scope, element, attrs){
	    console.log(typeof scope.edit);
	    element.bind("mouseenter", partial(toggle, scope, scope.admin));	    
	}
    };

}

function toggleClickAdmin(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggle, scope, scope.admin));
	} 
    };

}

function toggleMouseEnterHome(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("mouseenter", partial(toggle, scope, scope.home));
	}
    };

}

function toggleClickHome(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggle, scope, scope.home));
	}
    };

}

function toggleMouseEnterAbout(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("mouseenter", partial(toggle, scope, scope.about));
	}
    };

}

function toggleClickAbout(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggle, scope, scope.about));
	}
    };

}

function toggleMouseEnterContact(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("mouseenter", partial(toggle, scope, scope.contact));
	}
    };

}

function toggleClickContact(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggle, scope, scope.contact));
	}
    };

}

function toggleMouseEnterProduct(){

    return {
	restrict : "A",
	link : function(scope,element,attrs){
	    element.bind("mouseenter", partial(toggle, scope, scope.product));
	}
    };
}

function toggleClickProduct(){

    return {
	restrict : "A",
	link : function(scope,element,attrs){
	    element.bind("click", partial(toggle, scope, scope.product));
	}
    };
}

function toggleMouseEnterClient(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("mouseenter", partial(toggle, scope, scope.client));
	}
    };

}

function toggleClickClient(){

    return {
	restrict : "A",
	link : function(scope, element, attrs){
	    element.bind("click", partial(toggle, scope, scope.client));
	}
    };

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

angular
    .module("appDirectives")
    .directive("togglemouseenterclient", toggleMouseEnterClient);

angular
    .module("appDirectives")
    .directive("toggleclickclient", toggleClickClient);

angular
    .module("appDirectives")
    .directive("togglemouseenterproduct", toggleMouseEnterProduct);

angular
    .module("appDirectives")
    .directive("toggleclickproduct", toggleClickProduct);
