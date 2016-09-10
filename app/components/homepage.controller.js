angular
	.module('Portfolio')
	.controller('HomepageController',HomepageController);

function HomepageController(){

	var vm = this;

	vm.test = "Hello World!";
}