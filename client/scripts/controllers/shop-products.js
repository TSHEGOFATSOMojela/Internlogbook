'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);
      
app.controller("ProductsCtrl"['$scope','LogUser', function($scope,LogUser) {
    $scope.lusers = LogUser.find();

}]);
    
    
    
    
