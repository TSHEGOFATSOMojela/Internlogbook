'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller('EditCompanyCtrl', ['$scope', '$http', function($scope, $http) {

     $scope.company = {};
    
    $scope.editCompany=function(){
        $http.getElementById('http://localhost:3000/api/Companies',$scope.company_id).success(function (response) ) {
        $scope.company = response.data;
    }
  }

  }])

    