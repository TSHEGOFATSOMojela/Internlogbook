'use strict';


app.controller('SingleOrderCtrl', ['$scope', 'Objective',  '$stateParams', function($scope, Objective, $stateParams) {

    
    //get all objectives in the database
     $scope.objective = Objective.find();


  }]);










