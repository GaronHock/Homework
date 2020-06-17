var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })

    .when("/second/:num", {
      templateUrl: "pages/second.html",
      controller: "secondController",
    });
});



myApp.controller('mainController', ['$scope', '$location', '$log', ($scope, $location, $log) => {
  $log.info($location.path())
  $scope.name = "main"
}]);



myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', ($scope, $location, $log, $routeParams) => {
  $log.info($location.path())
  $scope.name = "Second"
  $scope.num = $routeParams.num;
}]);


//var myApp = angular.module("myApp", ["ngRoute"]);

// myApp.config(function ($routeProvider) {
//   $routeProvider

//     .when("/", {
//       templateUrl: "pages/main.html",
//       controller: "mainController",
//     })

//     .when("/second", {
//       templateUrl: "pages/second.html",
//       controller: "secondController",
//     });
// });

// myApp.controller("mainController", [
//   "$scope",
//   "$log",
//   function ($scope, $log) {
//     $scope.name = "Main";
//   },
// ]);

// myApp.controller("secondController", [
//   "$scope",
//   "$log",
//   function ($scope, $log) {
//     $scope.name = "Second";
//   },
// ]);
