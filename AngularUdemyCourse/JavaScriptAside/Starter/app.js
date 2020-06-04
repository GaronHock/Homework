const myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
    // $scope.name = 'Jane Doe';
    // $scope.occupation = 'Coder';
    
    // $scope.getname = function() {
    //     return 'John Doe';
    // }
    
    // console.log($scope);
    
});

let searchPeople = (firstName, lastName, height, age, occupation) => {
    return 'Garon Hock';
}
const searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);


///Above I am converting a function to a string. Since it is now a string