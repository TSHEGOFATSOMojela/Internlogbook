'use strict';

app.controller('OrdersCtrl', ['$scope', 'Objective', '$state',
               function($scope, Objective,  $state) {



  //create/add a new Objective
   $scope.addObjective = function() {
      Objective
        .create({
          name: $scope.newObjective.title,
          dueDate: $scope.newObjective.dueDate,
          desc: $scope.newObjective.description,
          status: $scope.newObjective.status
       }).$promise
        .then(function() {
          //location go to view Objective page
          $state.go('app.shop.single-order');
        });
    };

    
  }])

//edit and save objective
.controller('OrdersCtrls', ['$scope','$q', 'Objective','$stateParams', '$state', function($scope, $q, Objective, $stateParams, $state) {
    //edit Objective
    $scope.newObjective = {};
       Objective.findById({ id: $stateParams.id })
          .$promise
          .then(function(data) {
        $scope.newObjective = data;
   
      });
   //save company
    $scope.addObjective = function() {
      $scope.newObjective
        .$save()
        .then(function(newObjective) {
          $state.go('app.shop.single-order');
        });
    };
  }])


