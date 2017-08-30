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
  .controller('LoginCtrl', function ($scope,$state) {
    $scope.login = function() {

        
        var username=$scope.user.name;
        var password=$scope.user.password;
        
        if($scope.user.email=='admin@example.com' && $scope.user.password=='admin'){
            
                $state.go('app.dashboard');
//            $location.path('/dashboard');
        }
        else if($scope.user.email=='mentor' && $scope.user.password=='mentor'){
            
             $state.go('app.shop.single-order');
        }
         else if($scope.user.email=='intern@example.com' && $scope.user.password=='intern'){
            
             $state.go('app.calendar');
        }else{
            alert('Username or Password are incorrect');
        }
            
    };
  });




//  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
//      function($scope, AuthService, $state) {
//    AuthService.logout()
//      .then(function() {
//        $state.go('core.login');
//      });
//  }])
//  .controller('SignUpController', ['$scope', 'AuthService', '$state',
//      function($scope, AuthService, $state) {
//    $scope.user = {
//      email: 'baz@qux.com',
//      password: 'bazqux'
//    };
//
//    $scope.register = function() {
//      AuthService.register($scope.user.email, $scope.user.password)
//        .then(function() {
//          $state.transitionTo('core.signup');
//        });
//    };
//  }]);
