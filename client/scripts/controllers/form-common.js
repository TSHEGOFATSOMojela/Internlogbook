//'use strict';
//
//app.controller('FormsCommonCtrl', ['$scope', 'Company', function($scope,Company) {
//
//
//  //create/add a new company
//    $scope.addCompany= function() {
//      Company
//        .create({
//          name: $scope.newCompany.name,
//          email: $scope.newCompany.email,
//          contactNo: $scope.newCompany.contactNo,
//          address: {street : $scope.newCompany.street,
//                    town : $scope.newCompany.town,
//                    city : $scope.newCompany.city,
//                    code : $scope.newCompany.code},
//          website: $scope.newCompany.website,
//         
//        }).$promise
//        .then(function() {
//          $state.go('common.html');
//        });
//    };
//  }])