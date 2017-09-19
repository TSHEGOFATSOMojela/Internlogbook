'use strict';


app.controller('SingleOrderCtrl', ['$scope', 'Objective',  '$stateParams', function($scope, Objective, $stateParams) {

    
    
    //get all companies in the database
     $scope.objectives = Objective.find();
    
    
    
    
//     $scope.remove = function(){
//      //NB this will change to "EASY way " once connected to DB
//      if (confirm("are you sure you want to delete") == true) {
//      Objective.deleteById($stateParams.id);
//  }
//     
//	};
    
    
  }])