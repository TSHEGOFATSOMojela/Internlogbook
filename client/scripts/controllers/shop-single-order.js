'use strict';


app.controller('SingleOrderCtrl', ['$scope', 'Objective', function($scope, Objective) {

    
    
    //get all companies in the database
     $scope.objectives = Objective.find();
    
    
  }])