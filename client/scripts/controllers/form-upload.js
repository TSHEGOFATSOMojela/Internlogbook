
'use strict';


app.controller('FormUploadCtrl', ['$scope', 'Company', '$state', function($scope, Company,  $state) {



  //create/add a new company
    $scope.action = 'add';
   $scope.addCompany = function() {
      Company
        .create({
          name: $scope.company.name,
          email: $scope.company.email,
          contactNo: $scope.company.contactNo,
          address:{"street" : $scope.company.street,
                   "town" : $scope.company.town,
                   "city" : $scope.company.city,
                   "code" :$scope.company.code}, 
          website: $scope.company.website
          
         
        }).$promise
        .then(function() {
          //location go to view company page
          $state.go('app.forms.wizard');
        });
    };
    
    
  }])
.controller('EditUploadCtrl', ['$scope','$q', 'Company','$stateParams', '$state', function($scope, $q, Company, $stateParams, $state) {
    
    $scope.action = 'Edit';
    $scope.company = {};
       Company.findById({ id: $stateParams.id })
          .$promise
          .then(function(data) {
        $scope.company = data;
   
      });

    $scope.addCompany = function() {
      $scope.company
        .$save()
        .then(function(company) {
          $state.go('app.forms.wizard');
        });
    };
  }])
            
      }]);