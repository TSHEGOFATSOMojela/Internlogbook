'use strict';
app
.controller("mentorController", function($scope) {
    $scope.mentors=[];
    
    $scope.addMentor = function()
    {
          
    $scope.mentor={'title':$scope.mentor.title,
                  'firstname':$scope.mentor.firstname,
                  'lastname':$scope.mentor.lastname,
                  'email':$scope.mentor.email,
                  'phone':$scope.mentor.phone,
                  'company':$scope.mentor.company,
                  'department':$scope.mentor.department};
        $scope.mentors.push($scope.mentor);
        console.log($scope.mentor)
    
        
    };
    
    
});
