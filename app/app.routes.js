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
		.when("/art",{
			templateUrl : "/app/components/art.html",
			controller : "ArtController",
			controllerAs : "vm"
		})
		.when("/lastfm",{
			templateUrl : "/app/components/lastfm.html"
		})
		.when("/resume",{
			templateUrl : "/app/components/resume.html"
		})
		.otherwise({
			redirectTo : "/about"
		});
	
}
