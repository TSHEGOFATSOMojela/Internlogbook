'use strict';


app.controller('AddInternCtrl', ['$scope','$q', 'LogUser','$stateParams', '$state', function($scope, $q, LogUser, $stateParams, $state) {
    //edit intern
 
    $scope.user = {};
       LogUser.findById({ id: $stateParams.id })
          .$promise
          .then(function(data) {
        $scope.user = data;
   
      });

       //save intern
    $scope.addIntern = function() {
      $scope.user
        .$save()
        .then(function(user) {
          $state.go('app.shop.interns');
        });
    };
  }])


