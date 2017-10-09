        'use strict';
 app
            .controller('SignupCtrl', ['$scope','$state','Role','RoleMapping', 'LogUser','Company', function($scope,$state,Role,RoleMapping, LogUser, Company) {
            
                $scope.company={};
                $scope.Companies = Company.find();
                $scope.role={};
//               $scope.roles = Role.find();
                 $scope.roles = Role.find({filter:{where:{name:'mentee'}}});
                             

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
                      uCategory: $scope.role.selected.name,
                      companyId: $scope.company.selected.id
                 }).$promise
                   .then(function(response) {
                     
                      RoleMapping.create({
                      principalType: "USER",
                      principalId: response.id,
                      roleId: $scope.role.selected.id
                    });
                }).then(function(){
                //location go to view company page
                  $state.go('core.login');
                 });
            };

          }]);


