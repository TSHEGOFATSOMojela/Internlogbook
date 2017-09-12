'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller('FormWizardCtrl', ['$scope', 'Company', function($scope, Company) {

    
    
    //get all companies in the database
     $scope.Companies = Company.find();

  }])
