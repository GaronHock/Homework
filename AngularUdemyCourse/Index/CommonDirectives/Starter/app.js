var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    $scope.characters = 5;
    $scope.lowercasehandle = () => {
        return $filter('lowercase')($scope.handle);
    };


    $scope.clicked = false;
    $scope.rules = [

        {rulename: 'Must be 5 characters'},
        {rulename: 'Must not be used elsewhere'},
        {rulename: 'Must be cool'}
    ]

    $scope.count = 0;
    $scope.alertClick = () => {
        if ($scope.count % 2 === 0){
            $scope.clicked = true;
        } else {
            $scope.clicked = false;
        }
        $scope.count += 1;
    }


    //there is more than ng-click, like ng-keydown, ng-change/  can respond to all normal events
}]);
