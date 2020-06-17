var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    // var rulesrequest = new XMLHttpRequest();
    // rulesrequest.onreadystatechange = function () {
    //     $scope.$apply(function () {
    //         if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
    //             $scope.rules = JSON.parse(rulesrequest.responseText);
    //         }
    //     });
    // }
    // rulesrequest.open("GET", "http://localhost:54765/api", true);
    // rulesrequest.send();

    $http.get('/api/')
    .success((result) => {
        $scope.rules = result;
    })
    .error((data, status) => {
        console.log(data);
    })


    $scope.newRule = '';

    $scope.addRule = () => {
        $http.post('/api', {newRule: $scope.newRule})
        .success((result) => {
            $scope.rules = result;
            $scope.newRule = '';
        })
        .error((data, status) => {
            console.log(data);
        })
    };
}]);