'use strict';


app.controller('ProductsCtrl', ['$scope', 'LogUser', function ($scope, LogUser) {

  $scope.Interns = LogUser.find();
}]);