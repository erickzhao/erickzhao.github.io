angular
	.module('Portfolio')
	.config(config);


function config($routeProvider){
	$routeProvider
		.when("/about",{
			templateUrl : "/app/components/about.html",
			controller : "AboutController",
			controllerAs : "vm"
		})
		.when("/projects",{
			templateUrl : "/app/components/projects.html",
			controller : "ProjectsController",
			controllerAs : "vm"
		})
		.when("/photo",{
			templateUrl : "/app/components/photo.html",
			controller : "PhotoController",
			controllerAs : "vm"
		})
		.when("/lastfm",{
			templateUrl : "/app/components/lastfm.html",
			controller : "LastfmController",
			controllerAs : "vm"
		})
		.otherwise({
			redirectTo : "/about"
		});
	
}
