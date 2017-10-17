'use strict';


app.controller('SingleOrderCtrl', ['$scope', 'Objective',  '$stateParams', function($scope, Objective, $stateParams) {

    var datetime = new Date();
    
    //get all companies in the database
    $scope.obj={};
     $scope.objectives = Objective.find();
    $scope.obj = Objective.find();

    
//  $scope.oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
//$scope.firstDate = new Date();
//$scope.secondDate = Objective.find({where: {dueDate: Date }});
//
//$scope.diffDate = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  
    $scope.diffDate = Objective.find({where: {dueDate: true}});
    

  }])

    //delete objective
    .controller('DeleteObjectiveCtrl', ['$scope', 'Objective', '$state',
          '$stateParams', function($scope, Objective, $state, $stateParams) {
                 if (confirm("are you sure you want to delete?") == true) {
        Objective
          .deleteById({id: $stateParams.id})
          .$promise
          .then(function() {
            $state.go('app.shop.single-order');
          });
      }else
               $state.go('app.shop.single-order');
          }]);