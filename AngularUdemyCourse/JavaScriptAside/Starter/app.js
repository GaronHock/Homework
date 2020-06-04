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


///Above I am converting a function to a string. Since it is now a string I can actually parse the parameters
///to figure out the names of the expected parameters of the function
///can make a decision based on what i seet ad