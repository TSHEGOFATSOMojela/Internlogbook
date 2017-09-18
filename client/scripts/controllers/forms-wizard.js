'use strict';



// app.controller('FormWizardCtrl', function($scope, $http) {
//    $http.get("http://localhost:3000/api/Companies").then(function (response) {
//        $scope.Companies = response.data;
//    });
//})
app
    .controller('FormWizardCtrl', ['$scope', 'Company', '$state',
      '$stateParams', function($scope, Company, $state, $stateParams) {
           
          $scope.Companies = Company.find();
         }]);