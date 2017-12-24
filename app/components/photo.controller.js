angular
	.module('Portfolio')
	.controller('PhotoController',PhotoController);

function PhotoController($http){

	var vm = this;

	getPhotos();

	function getPhotos(){

		var id = "151758913@N02";

		var flickrEndpoint = "https://api.flickr.com/services/feeds/photos_public.gne?id="+id+"&format=json&jsoncallback=JSON_CALLBACK";

		return $http.jsonp(flickrEndpoint)
			.then(function(result){
				vm.photos = result.data.items;
			})
			.catch(function(error){
				console.error(error);
			});

	
	}
}

