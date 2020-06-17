var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    console.log($scope);
    
});

var searchPeople = function(firstName, $scope, height, age, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));

///since $scope could be potentially seen and angular knows what the name of that variable 
//is it will do a dependency injection
///will create an object and pass that object in that spot to that method
//angular knows what it is
//thats what happens in the controller