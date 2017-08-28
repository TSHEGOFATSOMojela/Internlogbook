'use strict';
app
.controller("internController", function($scope) {
    $scope.interns=[];
    
    $scope.addIntern = function()
    {
          
    $scope.mentor={'title':$scope.intern.title,
                  'firstname':$scope.intern.firstname,
                  'lastname':$scope.intern.lastname,
                  'email':$scope.intern.email,
                  'phone':$scope.intern.phone,
                  'company':$scope.intern.company,
                  'mentor':$scope.intern.mentor,
                  'department':$scope.intern.department};
        $scope.interns.push($scope.intern);
        console.log($scope.intern)
    
        
    };
    
    
});
