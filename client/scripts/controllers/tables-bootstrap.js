'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesBootstrapCtrl
 * @description
 * # TablesBootstrapCtrl
 * Controller of the minovateApp
 */


 app
.controller('TablesBootstrapCtrl', function($scope, DTOptionsBuilder, DTColumnDefBuilder){

     var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $scope.activities =[{objectname:"Strongloop",activity:"studying",comment:"i will finish it soon",duration:"3hrs 30mins",dates:date},
                       {objectname:"MongoDB",activity:"creating database",comment:"it was easy",duration:"2hrs",dates:date},
                       {objectname:"Linex",activity:"hacking absa bank",comment:"i did get access but there was no money",duration:"2hrs 30mins",dates:date}];
    $scope.leaves =[{leaveType:"sick leave",From:date,To:new Date(y, m, d +3),comment:"Flu is killing me",attachment:"sick note"},
                       {leaveType:"annual leave",From:date,To:new Date(y, m, d +13),comment:"Family matter",attachment:"approval note"},
                       {leaveType:"parental leave",From:date,To:new Date(y, m, d +1),comment:"urgent",attachment:"approval note"}]
    
    $scope.projects = [{
      title: 'Strongloop',
      priority: {
        value: 1,
        title: 'Please study this for exam',
        duration: new Date(y, m, d +30)  
      },
      status: 42,
      chart: {
        data: [1,3,2,3,5,6,8,5,9,8],
        color: '#cd97eb'
      }
    },{
      title: 'MongoDB',
      priority: {
        value: 3,
        title: 'back-end must be done using mongodb',
        duration:new Date(y, m, d + 15)  
      },
      status: 89,
      chart: {
        data: [2,5,3,4,6,5,1,8,9,10],
        color: '#a2d200'
      }
    },{
      title: 'Linex',
      priority: {
        value: 1,
        title: 'we are about to hack',
        duration:new Date(y, m, d +7) 
      },
      status: 23,
      chart: {
        data: [5,6,8,2,1,6,8,4,3,5],
        color: '#ffc100'
      }
    }];

     
    
    $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();
    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4).notSortable()
    ];
        
  });


