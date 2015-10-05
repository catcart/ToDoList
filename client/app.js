var app = angular.module("todo", []);

app.controller("MainController", ["$scope", function($scope){

    //has to been an empty array for delete functionality to work
    $scope.toDoList = [];

    $scope.addItem = function (){
        //adds list item to array and appends it
        $scope.toDoList.push({task:$scope.item, complete : false});
        $scope.item = "";
        console.log($scope.toDoList);
    };

    $scope.removeTask = function () {
        //loops through to find completed items and remove from list using boolean
        for(var i = 0; i < $scope.toDoList.length; i++){
            if($scope.toDoList[i].complete){
                $scope.toDoList.splice(i, 1);
            }
        }
        console.log($scope.toDoList);
    };

}]);