// var myApp = angular.module('myApp', ['ngRoute']);

// myApp.config(function ($routeProvider) {
//   $routeProvider.when("/hello", {
//     templateUrl: "pages/main.html",
//     controller: "mainController",
//   });
// });

// myApp.controller("mainController", [
//   "$scope",
//   "$log",
//   function ($scope, $log) {
//     console.log("hello")
//   },

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
    })
});

myApp.controller("mainController", [
  "$scope",
  "$location",
  "$log",
  ($scope, $location, $log) => {
    $log.info($location.path());
    $scope.name = "main";
    console.log("hello")
        $scope.formattedAddress = function (person) {
          return (
            person.name +
            ", " +
            person.sex +
            ", " 
          );
        };
    

    $scope.people = [
      {
        name: "Garon",
        sex: "Male",
      },
      {
        name: "Gina",
        sex: "Female",
      },
    ];
  },
]);

myApp.directive("searchResult", function () {
  return {
    restrict: "AECM",
    templateUrl: "directives/searchresult.html",
    replace: true,
    scope: {
      personObject: "=",
     formattedAddressFunction: "&", ///this is for functions
    },
  };
});


