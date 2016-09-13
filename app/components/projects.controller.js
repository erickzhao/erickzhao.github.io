angular
	.module('Portfolio')
	.controller('ProjectsController',ProjectsController);

function ProjectsController($http){

	var vm = this;

	getProjects();

	function getProjects(){

		var codepenUsername = "helvetica";
		var tag = "b";

		var codepenEndpoint = "http://cpv2api.com/pens/public/"+codepenUsername+"?tag="+tag;

		return $http.get(codepenEndpoint)
			.then(function(response){
				vm.projects = response.data;
			})
			.catch(function(error){

			});

	
	}
}

