'use strict';

app.controller('FormsValidateCtrl', ['$scope', 'LogUser', function($scope, LogUser) {

    
    
    //get all companies in the database
     $scope.Mentors = LogUser.find();
    
    
  }])