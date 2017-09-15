        'use strict';






        app
            .controller('SignupCtrl', ['$scope','$state', 'LogUser', 'Company', function($scope,$state, LogUser, Company) {

                //find list of companies registered in the system
                $scope.company={};
                $scope.Companies = Company.find();



             //Create a new user
                $scope.register = function() {
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
                  $state.go('core.login');
                });
            };


          }]);


