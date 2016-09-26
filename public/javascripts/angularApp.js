// congtrollers and what not
var app = angular.module('SeedProject', []);

app.controller('Controller', function($scope) {
	$scope.variables = [
		{ 
		  id: 1,
		  name: "Ted",
	      sex: "Male"},

	    { 
		  id: 2,
		  name: "Dan",
	      sex: "Male"}
	];
});