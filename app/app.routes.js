angular
	.module('Portfolio')
	.config(config);


function config($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl : "/app/components/homepage.html",
		controller : "HomepageController",
		controllerAs : "vm"
	})
	.otherwise({
		templateUrl : "/app/components/homepage.html",
		controller : "HomepageController",
		controllerAs: "vm"
	});
	
}
