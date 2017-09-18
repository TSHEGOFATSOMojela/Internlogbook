'use strict';

app.controller('OrdersCtrl', ['$scope', 'Objective', '$state',
               function($scope, Objective,  $state) {



  //create/add a new Objective
   $scope.addObjective = function() {
      Objective
        .create({
          name: $scope.newObjective.title,
          dueDate: $scope.newObjective.dueDate,
          desc: $scope.newObjective.description
       }).$promise
        .then(function() {
          //location go to view Objective page
          $state.go('app.shop.single-order');
        });
    };

    
  }])




