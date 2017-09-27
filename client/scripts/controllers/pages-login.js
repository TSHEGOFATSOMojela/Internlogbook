    'use strict';

    app

   .controller('LoginCtrl', ['$scope','$state','$rootScope', 'LogUser', function($scope,$state,$rootScope, LogUser) {
       
           //verified
//    app.get('/verified', function(req, res) {
//    res.render('verified');
//  }); 
       
       //login a user
       $scope.login = function() {
          return LogUser
            .login({email: $scope.user.email, password: $scope.user.password})
            .$promise
            .then(function() {
              //location go to view company page
              $state.go('app.calendar');
              });
        };
       
       
       
       
       //logout a user
          $scope.logout = function () {
          return LogUser
           .logout()
           .$promise
           .then(function() {
             $state.go('core.login');
           });
        }
      }]);




