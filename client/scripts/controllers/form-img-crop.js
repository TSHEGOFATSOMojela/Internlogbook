'use strict';

app.controller('FormImgCropCtrl', ['$scope', 'logUser', '$state', function($scope, logUser,  $state) {
    
      //create/add a new Mentor
   $scope.addCompany = function() {
      logUser
        .create({
          fName: $scope.newMentor.FirstName,
          lName: $scope.newMentor.lastName,
          email: $scope.newMentor.email, 
          contactNo: $scope.newMentor.contacts,
          gender: $scope.newMentor.gender,
          jobTitle: $scope.newMentor.title,
          department: $scope.newMentor.department,
          uCategory: $scope.newMentor.role
          
          
        }).$promise
        .then(function() {
          //location go to view mentor page
          $state.go('app.forms.validate');
        });
    };
    
    
    
    
    
    
  })
