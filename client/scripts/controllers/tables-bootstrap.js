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
            $state.go('app.shop.single-order');
          });
      }else
               $state.go('app.shop.single-order');
          }]);


