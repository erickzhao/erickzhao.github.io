angular
	.module('Portfolio')
	.controller('AboutController',AboutController);

function AboutController(){

	var vm = this;

	vm.test = "This is my about page";


	vm.skills = [
					"html5",
					"javascript",
					"jquery",
					"git",
					"angularjs",
					"reactjs",
					"d3js",
					"css3",
					"sass",
					"webpack",
					"babel",
					"heroku",
					"redis",
					"bootstrap",
					"grunt",
					"java",
					"photoshop",
					"python",
					"c",
					"csharp"]
}