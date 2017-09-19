
'use strict';


app.controller('FormUploadCtrl', ['$scope', 'Company', '$state', function($scope, Company,  $state) {



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
          $state.go('app.forms.wizard');
        });
    };
    
    
  }])
//edit and save company
.controller('FormUploadCtrls', ['$scope','$q', 'Company','$stateParams', '$state', function($scope, $q, Company, $stateParams, $state) {
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
          $state.go('app.forms.wizard');
        });
    };
  }])
//delete company
.controller('DeleteCompanyCtrl', ['$scope', 'Company', '$state',
      '$stateParams', function($scope, Company, $state, $stateParams) {
    Company
      .deleteById({id: $stateParams.id})
      .$promise
      .then(function() {
        $state.go('app.forms.wizard');
      });
  }]);
