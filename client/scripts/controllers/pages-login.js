'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
app
  .controller('LoginCtrl', function ($scope,$state) {
    $scope.login = function() {

        
        var username=$scope.user.userName;
        var password=$scope.user.password;
        
        if($scope.user.userName=='admin@example.com' && $scope.user.password=='admin'){
            
                $state.go('app.dashboard');
//            $location.path('/dashboard');
        }
        else if($scope.user.userName=='mentor' && $scope.user.password=='mentor'){
            
             $state.go('app.shop.single-order');
        }
         else if($scope.user.userName=='intern@example.com' && $scope.user.password=='intern'){
            
             $state.go('app.calendar');
        }else{
            alert('Username or Password are incorrect');
        }
            
    };
  });
