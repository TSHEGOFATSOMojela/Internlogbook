'use strict';

app.controller('FormsValidateCtrl', ['$scope', 'User', function($scope, User) {

    
    
    //get all companies in the database
     $scope.Mentors = User.find();
    
    
  }])