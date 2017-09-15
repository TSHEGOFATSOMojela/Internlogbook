'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller('EditCompanyCtrl', ['$scope', '$http','viewCompany', function($scope, $http,viewCompany) {
        $http.findById('http://localhost:3000/api/Companies').then(function (response) ) {
          $scope.viewCompany = response.data;
    }                                                                                                                                                                  

  }])

    