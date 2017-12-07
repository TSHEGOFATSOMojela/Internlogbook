'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesDatatablesCtrl
 * @description
 * # TablesDatatablesCtrl
 * Controller of the minovateApp
 */
app
   .controller('ActivitiesCtrl', ['$scope','Activity','Meeting','Leave','DTOptionsBuilder','DTColumnDefBuilder', function($scope,
      Activity,Meeting,Leave, DTOptionsBuilder, DTColumnDefBuilder) {
    $scope.activities = Activity.find({
      filter: {
        include: [
          'objective'
        ]
      }
    });
       
     $scope.meetings = Meeting.find({
      filter: {
        include: [
          'logUser'
        ]
      }
    });  
    $scope.leaves = Leave.find({
      filter: {
        include: [
          'logUser'
        ]
      }
    });
       
//       $scope.download = function (mimeType,base64,fileName,fileExtension) {
//          console.log('download')
//          var base64Data = btoa(base64);
//          base64DownloadFactory.download('data:' + mimeType + ';base64,' + base64Data, fileName, 'pdf')
//        }

      
 
  $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();
      $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4).notSortable()
    ]; 
  }]);

