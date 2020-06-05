var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    
  $scope.name = 'Garon';

  timeout = $timeout(() =>{
    $scope.name = 'Everybody'
  }, 3000);
    
}]);
