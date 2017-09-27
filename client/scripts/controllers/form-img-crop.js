 'use strict';

app
 .controller('FormImgCropCtrl', ['$scope','$state', 'LogUser', 'Company', '$stateParams', function($scope,$state, LogUser, Company, $stateParams) {

                //find list of companies registered in the system
                $scope.company={};
//                $scope.Companies = Company.find();
     
         $scope.Companies = Company.find({
      filter: {
        where: {
          id: $stateParams.id
        }
       
      }
    });
     
     
     

             //Create a new user
                $scope.addMentor = function() {
                 LogUser
                   .create({
                      email: $scope.user.email,
                      password: $scope.user.password,
                      fName: $scope.user.fName,
                      lName: $scope.user.lName,
                      contactNo: $scope.user.contactNo,
                      gender: $scope.user.gender,
                      jobTitle: $scope.user.jobTitle,
                      department: $scope.user.department,
                      uCategory: $scope.user.uCategory,
                      companyId: $scope.company.selected.id
                 }).$promise
                .then(function() {
                  //location go to view company page
                  $state.go('app.forms.wizard');
                });
            };

    //edit mentor
    $scope.action = 'Save';
    $scope.user = {};
       LogUser.findById({ id: $stateParams.id })
          .$promise
          .then(function(data) {
        $scope.user = data;
   
      });
   //save mentor
    $scope.addMentor = function() {
      $scope.user
        .$save()
        .then(function(user) {
          $state.go('app.forms.validate');
        });
    };
          }])



