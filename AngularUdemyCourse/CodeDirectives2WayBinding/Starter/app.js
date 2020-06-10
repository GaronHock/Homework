var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter', ($scope, $filter) => {
  $scope.handle = "";
  $scope.filtered = () => $filter('lowercase')($scope.handle)

}]);
