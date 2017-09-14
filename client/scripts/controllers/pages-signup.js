'use strict';

app.controller('SignupCtrl', ['$scope','$state', 'AuthService', function($scope,$state, AuthService) {

         
         $scope.user ={
              email: "you@me.com",
              password: "skhomo@123",
              fName: "kediboni",
              lName: "malatji",
              contactNo: "012345678",
              gender: "female",
              jobTitle: "bas",
              department: "BAs",
              uCategory: "intern"
         };
       
        $scope.register = function() {
             AuthService.register($scope.user.email, $scope.user.password,$scope.user.fName,$scope.user.lName,$scope.user.contactNo,$scope.user.gender,$scope.user.jobTitle,$scope.user.department,$scope.user.uCategory)
            .then(function() {
              $state.transitionTo('core.login');
            });
        };


  }]);

//
// app.controller('SignupCtrl', ['$scope', 'AuthService', '$state',
//      function($scope, AuthService, $state) {
//    $scope.user = {
//              email: "you@me.com",
//              password: "skhomo@123",
//              fName: "kediboni",
//              lName: "malatji",
//              contactNo: "012345678",
//              gender: "female",
//              jobTitle: "bas",
//              department: "BAs",
//              uCategory: "intern"
//    };
//
//    $scope.register = function() {
//      AuthService.register($scope.user.email, $scope.user.password,$scope.user.fName,$scope.user.lName,$scope.user.contactNo,$scope.user.gender,$scope.user.jobTitle,$scope.user.department,$scope.user.uCategory)
//        .then(function() {
//          $state.transitionTo('core.login');
//        });
//    };
//  }]);


//DON'T DELETE IS WORKING CODE

//app.controller('SignupCtrl', ['$scope','$state', 'LogUser', function($scope,$state, LogUser) {
//
//        $scope.register = function() {
//         LogUser
//           .create({
//              email: $scope.user.email,
//              password: $scope.user.password,
//              fName: $scope.user.fName,
//              lName: $scope.user.lName,
//              contactNo: $scope.user.contactNo,
//              gender: $scope.user.gender,
//              jobTitle: $scope.user.jobTitle,
//              department: $scope.user.department,
//              uCategory: $scope.user.uCategory
//         }).$promise
//        .then(function() {
//          //location go to view company page
//          $state.go('app.calendar');
//        });
//    };
//
//
//  }]);

