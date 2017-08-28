'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app
    .controller("SingleOrderCtrl", function($scope) {
  $scope.objectives=[
       {
            "id": "1",
            "title": "loopback",
            "description": "learn loopbook will use it for our backend",
            "duration": "3/1/2017"
        }
      
      
    ,{
		    "id": "2",
            "title": "loopback",
            "description": "learn loopbook will use it for our backend",
            "duration": "3/1/2017"
       },
       {
		    "id": "3",
            "title": "loopback",
            "description": "learn loopbook will use it for our backend",
            "duration": "3/1/2017"
       },
         {
		    "id": "4",
            "title": "loopback",
            "description": "learn loopbook will use it for our backend",
            "duration": "3/1/2017"
       },
        { 
            "id": "5",
            "title": "loopback",
            "description": "learn loopbook will use it for our backend",
            "duration": "3/1/2017"
         },

    ]
    
  
  $scope.edit=function(u){

      $scope.editMode=true;
      $scope.objectives=angular.copy(u);

  };
  

      $scope.clear=function(){
     $scope.editMode=false;

  };
        $scope.save=function(){
    if (confirm("are you sure you want to save the changes?") == true) {
       $scope.objectives=angular.copy(objective);
  }
       
    };
  $scope.remove = function(n){
      //NB this will change to "EASY way " once connected to DB
      if (confirm("are you sure you want to delete") == true) {
      $scope.objectives.splice(n,1);
  }
     
	};

    //add into a table
    $scope.addNewobjective=function(newobjective)
     {
      

      var i = $scope.objectives.length;   
       $scope.objectives[i]=newobjective

     };
    
    
  
    
});
