angular
	.module('Portfolio')
	.directive('mainNav',mainNav);

function mainNav(){
	return{
		templateUrl: '/app/layout/nav.html'
	};
}


