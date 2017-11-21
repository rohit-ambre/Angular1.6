


var myApp= angular
				.module("myModule",[])
				.controller("myController" , function($scope){


		var employees =[
			{name:"Rohit", dateOfBirth: new Date("November 29, 1994"), gender:"Male", salary:28000},
			{name:"Shubham", dateOfBirth: new Date("Octobrer 12, 1995"), gender:"Male", salary:32000},
			{name:"Arjun", dateOfBirth: new Date("August 24, 1996"), gender:"Female", salary:18000},
			{name:"Sandesh", dateOfBirth: new Date("December 04, 1993"), gender:"Male", salary:38000},

		];

	$scope.employees=employees;
	$scope.sortColumn="name";



});

// var myController = function($scope){
// 	$scope.message="String to display";
// };

// myApp.controller("myController",function($scope){
// 	$scope.message="String to display";
// });