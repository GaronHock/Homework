var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter', '$timeout', ($scope, $filter, $timeout) => {
  $scope.handle = "";
  $scope.filtered = () => $filter('lowercase')($scope.handle);
  $scope.$watch("handle", (newValue, oldValue) => {
    console.info("Changed!");
    console.log("Old: " + oldValue);
    console.log("New: " + newValue);

    // setTimeout(() =>{

    //   $scope.$apply(() =>{
    //     $scope.handle = 'newTwitterHandle';
    //     console.log('Scope changed!');
    //    })
    //   },3000);
    // })

    $timeout(() => {

        $scope.handle = "newTwitterHandle";
        console.log("Scope changed!");
    }, 3000);
  });

  

  ///You want to use $apply typically when using some sort of external library or something thats outside of angular (maybe some javascript
  //built in functions like setTimeout)
}]);
