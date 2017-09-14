'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller('EditCompanyCtrl', ['$scope', 'Company', '$state','$http', '$routeParams' , function($scope, Company, $state,$http,$routeParams) {
    
//var Company = require('./company.model');
//$scope.company = {};
//    $scope.submitted = false;
//    $scope.category_id = $routeParams.id;
//    
//// Get a single company record
//exports.show = function (req) {
//Company.findById(req.params.id, function (company) {
//     
//
//// Updates an existing company in the DB.
//exports.update = function (req) {
//    if (req.body._id) {
//        delete req.body._id;
//    }
//    Company.findById(req.params.id, function (company) {
//        
//        var updated = _.merge(company, req.body);
//        updated.save();
//}; 
//    $http.get('/app/forms/wizard/' + $scope.company_id ).success(function(company) {
//        $scope.company = Company;
//    })
//
//    $scope.editCompany = function(company,isValid) {
//        $scope.submitted = true;
//        $scope.company = company;
//        if(isValid && $scope.submitted) {
//            $http.put('/app/forms/wizard/' + $scope.company_id,company);
//            $scope.company = '';
//            $location.path('/company');
//        }
//    };
//    
//    };  
    
    $scope.editCompany = function(){
       $scope.editById = Company.logUsers.updateById();
    } 
      
  }]);
    
    