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
        $locationProvider.html5Mode(false);
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
	}).error(function(){
		alert("fail...")
	});
//   获取用户数据
	$scope.user={
		name:"ike",
		email:"2303870038@qq.com",
		Password:"123"	
	};
	$scope.find = function(){
		$http({
			method : "GET",
			url : "./logindatas.json",
			params : {
				'country':0
			}
		}).success(function(response){
			$scope.userdata=response;
		}).error(function(){
			alert("fail...")
		});
	};
// 	调用find函数
	$scope.find();
	
	  $scope.oneAtATime = true;

	  $scope.groups = [
		{
		  title: 'Dynamic Group Header - 1',
		  content: 'Dynamic Group Body - 1'
		},
		{
		  title: 'Dynamic Group Header - 2',
		  content: 'Dynamic Group Body - 2'
		}
	  ];
	  $scope.addpage = function() {
		  var Title='addtitle'
		  var Content='this is add content'
		  var Person='sonmebody'
		  var Time = '2017/1'
		  var newdata={Title,Content,Person,Time}
		  $scope.datas.push(newdata)
		  
	  };
	  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

	  $scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
	  };

	  $scope.status = {
		isCustomHeaderOpen: false,
		isFirstOpen: true,
		isFirstDisabled: false
	  };
	});
$(function(){
        $(".register").click(function(){
            $("#registermodal").modal("toggle");
        });
		$(".login").click(function(){
            $("#loginmodal").modal("toggle");
        });
		$('.carousel').carousel({
		  interval: 8000
		})
    });

$(function() {
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		$('#back-to-top').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop : 0},1000);
			return false;
		});
	});
