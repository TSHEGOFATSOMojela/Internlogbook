'use strict';

app.controller('FormsValidateCtrl', ['$scope', '$q', 'LogUser', 'Company', '$stateParams', function($scope, $q, LogUser, Company, $stateParams) {

    $scope.Mentors = {};
  
    
    //get all companies in the database
     $scope.Mentors = LogUser.find({
      filter: {
        include: [
          'company'
        ],
           where: {
            companyId: $stateParams.id 
        }
      }
    });
    
    
  }])

//delete company
.controller('DeleteMentorCtrl', ['$scope', 'LogUser', '$state',
      '$stateParams', function($scope, LogUser, $state, $stateParams) {
    LogUser
      .deleteById({id: $stateParams.id})
      .$promise
      .then(function() {
        $state.go('app.forms.validate');
      });
  }]);