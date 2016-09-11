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
			templateUrl : "/app/components/projects.html"
		})
		.when("/art",{
			templateUrl : "/app/components/art.html"
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
