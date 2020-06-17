var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope , $log, $filter, $resource) {

  // console.log($log);
  // $log.log("Hello");
  // //$log.info("Info");
  // $log.debug("debug info");
  // $log.warn("This is a warning");
  // $log.error("Throw Error")
  // console.log($filter);


  // $scope.name = "Garon";
  // $scope.filteredText = $filter('uppercase')($scope.name);
  // console.log($scope.filteredText);

  console.log($resource);
 // console.log($error);
});