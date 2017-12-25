angular
	.module('Portfolio')
	.controller('ProjectsController',ProjectsController);

function ProjectsController($http){

	var vm = this;

	getCodepen();

	function getCodepen(){

		var codepenUsername = "helvetica";
		var tag = "b";
		
		var codepenEndpoint = "http://cpv2api.com/pens/public/"+codepenUsername+"?tag="+tag;

		return $http.get(codepenEndpoint)
			.then(function(response){
				vm.codepen = response.data;
			})
			.catch(function(error){
				console.error(error);
			});
	}

	vm.projects = [
		{
			title: 'ballr',
			link: 'https://devpost.com/software/ballr-9v21gh',
			description: 'Advanced basketball analytics for drawing out timeout plays.',
			repo: 'https://github.com/alexboii/Ballr',
			slug: 'ballr'
		},
		{
			title: 'invite-contributors',
			link: 'https://probot.github.io/apps/invite-contributors/',
			description: 'Invite authors of merged pull requests to your GitHub organization.',
			repo: 'https://github.com/erickzhao/invite-contributors',
			slug: 'invite-contributors'
		},
		{
			title: 'Static HTML Webpack Boilerplate',
			link: 'https://github.com/erickzhao/static-html-webpack-boilerplate',
			description: 'A starting point for static website development with modern tooling.',
			repo: 'https://github.com/erickzhao/static-html-webpack-boilerplate',
			slug: 'static-html-webpack-boilerplate'
		}
	]
}

