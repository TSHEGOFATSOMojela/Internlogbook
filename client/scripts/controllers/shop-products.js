'use strict';

//get all the interns that belong to a mentor
app.controller('ProductsCtrl', ['$scope', 'LogUser', function ($scope, LogUser) {

  $scope.Interns = LogUser.find();
}])


//delete an intern that belong to a mentor
.controller('DeleteInternCtrl', ['$scope', 'LogUser', '$state',
      '$stateParams', function($scope, LogUser, $state, $stateParams) {
     if (confirm("are you sure you want to delete?") == true) {
    LogUser
      .deleteById({id: $stateParams.id})
      .$promise
      .then(function() {
        $state.go('app.shop.products');
      });
     }else
           $state.go('app.shop.products');
      }])