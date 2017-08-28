'use strict';
app
.controller("companyController", function($scope) {
    $scope.companys=[];
    
    $scope.addCompany = function()
    {
          
    $scope.mentor={'name':$scope.company.name,
                  'registration':$scope.company.registration,
                  'telephone':$scope.company.telephone,
                  'email':$scope.company.email,
                  'website':$scope.website.phone,
                  'street':$scope.company.street,
                  'building':$scope.company.building,
                  'city':$scope.company.city};
        $scope.companys.push($scope.company);
        console.log($scope.company)
    
        
    };
    
    
});
