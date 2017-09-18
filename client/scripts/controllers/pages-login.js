    'use strict';

    app

   .controller('LoginCtrl', ['$scope','$state','$rootScope', 'LogUser', function($scope,$state,$rootScope, LogUser) {
       $scope.login = function() {
          return LogUser
            .login({email: $scope.user.email, password: $scope.user.password})
            .$promise
            .then(function() {
              //location go to view company page
              $state.go('app.calendar');
              });
        };
          $scope.logout = function () {
          return LogUser
           .logout()
           .$promise
           .then(function() {
             $state.go('core.login');
           });
        }
      }]);




