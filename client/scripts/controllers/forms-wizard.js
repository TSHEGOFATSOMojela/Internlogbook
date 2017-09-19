'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);
//
app.controller('FormWizardCtrl', ['$scope', 'Company', function($scope, Company) {

    
    
    //get all companies in the database
     $scope.Companies = Company.find();

  }]);


// app.controller('FormWizardCtrl', function($scope, $http) {
//    $http.get("http://localhost:3000/api/Companies").then(function (response) {
//        $scope.Companies = response.data;
//    });
//})
