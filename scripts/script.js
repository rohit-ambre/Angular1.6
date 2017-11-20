


var myApp= angular
				.module("myModule",[])
				.controller("myController" , function($scope){
	
		var technologies =[
			{name:"C#", likes:0, dislikes:0},
			{name:"Node", likes:0, dislikes:0},
			{name:"Perl", likes:0, dislikes:0},	
			{name:"ASP", likes:0, dislikes:0},

		];

	$scope.technologies=technologies;

	$scope.incrementlikes= function(technology){
		technology.likes++;
	}


	$scope.incrementdislikes= function(technology){
		technology.dislikes++;
	}
});

// var myController = function($scope){
// 	$scope.message="String to display";
// };

// myApp.controller("myController",function($scope){
// 	$scope.message="String to display";
// });