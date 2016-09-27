// congtrollers and what not
angular.module('SeedProject', ['ui.router'])

.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'Controller'
			})
		;

		$urlRouterProvider.otherwise('home');

	}
])

.controller('Controller', [
	'$scope',
	function($scope) {

		$scope.entries = [];

		$scope.addEntry = function() {
			if ($scope.name === '' | $scope.desc === '') {return;}

			$scope.entries.push({
				name: $scope.name,
				desc: $scope.desc}
			);

			$scope.name = '';
			$scope.desc = '';
		}


}]);