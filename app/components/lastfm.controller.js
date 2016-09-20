angular
	.module('Portfolio')
	.controller('LastfmController', LastfmController);


function LastfmController($http){

	var vm = this;

	var apiKey = "c11bf2042886b7c2303b6eca97055d10";
	var userName = "hvta";

	var lastfmEndpoint = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+userName+"&api_key="+apiKey+"&period=7day&limit=9&format=json"

	getLastfmData();

	function getLastfmData(){
		return $http.get(lastfmEndpoint)
			.then(function(response){
				vm.albums = response.data.topalbums.album;
			})
			.catch(function(error){
				console.log(error);
			})
	}
}