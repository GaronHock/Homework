var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    $scope.name = "Garon Hock"

    $scope.getName = function() {
      return "Garon Hock";
    }
    $scope.getName();
    console.log($scope);
});