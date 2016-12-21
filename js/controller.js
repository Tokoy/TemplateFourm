'use strict';
// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : ''
		})

		// route for the login page
		.when('/login', {
			templateUrl : 'pages/login.html',
			controller  : ''
		})
		
		// route for the register page
		.when('/register', {
			templateUrl : 'pages/register.html',
			controller  : ''
		})

});
// create the controller and inject Angular's $scope
app.controller('myCtrl', function($scope) {
	$scope.visible = false;
	$scope.toggle = function(){
		$scope.visible = !$scope.visible;
	}
	});

	

