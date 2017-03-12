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
					"d3js",
					"css3",
					"sass",
					"bootstrap",
					"grunt",
					"java",
					"photoshop",
					"python",
					"c",
					"csharp"]
}