'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
app
// .controller('LoginCtrl', ['$scope', 'LogUser', '$state',
//      function($scope, LogUser, $state) {
//    $scope.user = {
//      email: 'kg@gmail.com',
//      password: 'skhomo@123'
//    };
//
//    $scope.login = function() {
//      $scope.user.email, $scope.user.password
//        .then(function() {
//          $state.go('app.calendar');
//        });
//    };
//  }]);
//
//app
 

    
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

//    $scope.login = function() {
//
//        
//        var username=$scope.user.name;
//        var password=$scope.user.password;
//        
//        if($scope.user.email=='admin@example.com' && $scope.user.password=='admin'){
//            
//                $state.go('app.dashboard');
////            $location.path('/dashboard');
//        }
//        else if($scope.user.email=='mentor' && $scope.user.password=='mentor'){
//            
//             $state.go('app.shop.single-order');
//        }
//         else if($scope.user.email=='intern@example.com' && $scope.user.password=='intern'){
//            
//             $state.go('app.calendar');
//        }else{
//            alert('Username or Password are incorrect');
//        }
//            
//    };


