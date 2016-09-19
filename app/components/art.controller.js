angular
	.module('Portfolio')
	.controller('ArtController',ArtController);

function ArtController($http){

	var vm = this;

	getArt();

	function getArt(){

		var tumblrUsername = "midori1017";
		var apiKey = "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4"
		var tag = "midori1017"

		var tumblrEndpoint = "https://crossorigin.me/https://api.tumblr.com/v2/blog/"+tumblrUsername+".tumblr.com/posts/photo?api_key="+apiKey+"&tag="+tag;

		return $http.get(tumblrEndpoint)
			.then(function(results){
				vm.artPieces = results.data.response.posts;
			})
			.catch(function(error){
			});

	
	}
}

