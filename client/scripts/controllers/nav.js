'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the minovateApp
 */
app
  .controller('NavCtrl', function ($scope, $http) {
    $scope.oneAtATime = false;

    $scope.status = {
      isFirstOpen: true,
      isSecondOpen: true,
      isThirdOpen: true
    };
    //count all Companies in the collection
    $http.get("http://localhost:3000/api/Companies/count").then(function (response) {
        $scope.Companies = response.data;
    });
    
     //count all Objectives in the collection
    $http.get("http://localhost:3000/api/Objectives/count").then(function (response) {
        $scope.Objectives = response.data;
    });
    
       //count all logUsers in the collection
      $http.get("http://localhost:3000/api/logUsers/count").then(function (response) {
        $scope.logUsers = response.data;
    });
       //count all logUsers in the collection
      $http.get("http://localhost:3000/api/Activities/count").then(function (response) {
        $scope.Activities = response.data;
    });
  });
