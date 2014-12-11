var artistscatApp = angular.module('artistscatApp', []);

artistscatApp.controller('ArtistListCtrl', ['$scope', '$http',function ($scope, $http) {
	$http.get("artists/artists.json").success(function(data) {
			$scope.artists = data;

	});

$scope.orderProp = "LNAME";
});