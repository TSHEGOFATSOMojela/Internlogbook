'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesBootstrapCtrl
 * @description
 * # TablesBootstrapCtrl
 * Controller of the minovateApp
 */


 app
   .controller('TablesBootstrapCtrl', ['$scope','Role', 'Objective','DTOptionsBuilder','DTColumnDefBuilder', function($scope,Role,
      Objective, DTOptionsBuilder, DTColumnDefBuilder) {
    $scope.objectives = Objective.find({
      filter: {
        include: [
          'logUser'
        ]
      }
    });
      
      
       
       $scope.status =[20,15];
       
      $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();
      $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4).notSortable()
    ]; 
  }])

    //delete objective
    .controller('DeleteObjectiveCtrl', ['$scope', 'Objective', '$state',
          '$stateParams', function($scope, Objective, $state, $stateParams) {
                 if (confirm("are you sure you want to delete?") == true) {
        Objective
          .deleteById({id: $stateParams.id})
          .$promise
          .then(function() {
            $state.go('app.tables.bootstrap');
          });
      }else
               $state.go('app.tables.bootstrap');
          }])

.controller('OrdersCtrl', ['$scope', 'Objective', '$state',
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
          $state.go('app.tables.bootstrap');
        });
    };

    
  }])

//edit and save objective
.controller('EditOrdersCtrl', ['$scope','$q', 'Objective','$stateParams', '$state', function($scope, $q, Objective, $stateParams, $state) {
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
          $state.go('app.tables.bootstrap');
        });
    };
  }])


