angular
	.module('Portfolio')
	.controller('AboutController',AboutController);

function AboutController(){

	var vm = this;

	vm.test = "This is my about page";
}