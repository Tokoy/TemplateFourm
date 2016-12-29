'use strict';
// configure our routes
app.config(function($routeProvider,$locationProvider) {
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
		 // use the HTML5 History API
        $locationProvider.html5Mode(true);
});
// create the controller and inject Angular's $scope
app.controller('myCtrl', function($scope,$http) {
	$scope.visible = false;
	$scope.toggle = function(){
		$scope.visible = !$scope.visible;
	}
	
	$http.get("./test.json").success(function(response){
		$scope.datas = response;
		//alert(JSON.stringify($scope.datas));//这样获取到的只是整个json的内容。
		//alert(JSON.stringify($scope.datas.id));这样返回的值是undefined。
	}).error(function(){})

	});
$(function(){
        $(".jump").click(function(){
            $("#mymodal").modal("toggle");
        });
		$('.carousel').carousel({
		  interval: 8000
		})
    });

