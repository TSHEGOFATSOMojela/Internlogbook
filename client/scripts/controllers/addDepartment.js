
'use strict';


app.controller('AddDepartmentCtrl', ['$scope', 'Company', '$state', function($scope, Company,  $state) {



  //create/add a new company
    $scope.action = 'add';
   $scope.addCompany = function() {
      Company
        .create({
          name: $scope.newCompany.name,
          email: $scope.newCompany.email,
          contactNo: $scope.newCompany.contactNo,
          address:{"street" : $scope.newCompany.street,
                   "town" : $scope.newCompany.town,
                   "city" : $scope.newCompany.city,
                   "code" :$scope.newCompany.code}, 
          website: $scope.newCompany.website
          
         
        }).$promise
        .then(function() {
          //location go to view company page
          $state.go('app.forms.department');
        });
    };
    
    
  }])
//edit and save company
.controller('AddDepartmentCtrls', ['$scope','$q', 'Company','$stateParams', '$state', function($scope, $q, Company, $stateParams, $state) {
    //edit company
    $scope.action = 'Save';
    $scope.newCompany = {};
       Company.findById({ id: $stateParams.id })
          .$promise
          .then(function(data) {
        $scope.newCompany = data;
   
      });
   //save company
    $scope.addCompany = function() {
      $scope.newCompany
        .$save()
        .then(function(newCompany) {
          $state.go('app.forms.department');
        });
    };
  }])
//delete company
.controller('DeleteCompanyCtrl', ['$scope', 'Company', '$state',
      '$stateParams', function($scope, Company, $state, $stateParams) {
    if (confirm("are you sure you want to delete?") == true) {
    Company
      .deleteById({id: $stateParams.id})
      .$promise
      .then(function() {
        $state.go('app.forms.department');
      });
  }else
           $state.go('app.forms.department');
      }]);
    
