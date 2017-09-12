'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller('EditCompanyCtrl', ['$scope', 'Company', function($scope, Company) {

    
    $scope.editCompany=function(company){
        $scope.current = company;
     
        $scope.current ={};
   
    $scope.save = function(company)
    {
        $scope.current ={};
    }

 }

    
    
  }])
