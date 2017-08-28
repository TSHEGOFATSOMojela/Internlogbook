'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesSignupCtrl
 * @description
 * # PagesSignupCtrl
 * Controller of the minovateApp
 */
app
  .controller('SignupCtrl', function ($scope) {
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
    $scope.Company = {};
    $scope.state = {};
    $scope.Position = {};
    
    var allCompanies = [{
        Id: 1,
        CompanyName: "SkhomoTech"
    }, {
        Id: 2,
       CompanyName: "IT Solutions"
    }];
    
    
    
    var allMentors = [{
        Id: 1,
        MentorName: "Tseko dev",
        CompanyId: 1
    }, {
        Id: 2,
        MentorName: "Theo Infa",
        CompanyId: 1
    }, {
        Id: 3,
        MentorName: "Evony sales",
        CompanyId: 1
    }, {
        Id: 4,
        MentorName: "Mashego BA",
        CompanyId: 1
    }, {
        Id: 5,
        MentorName: "Mojela dev",
        CompanyId: 2
    },{
        Id: 6,
        MentorName: "Tshego Hr",
       CompanyId: 2
    },{
        Id: 7,
        MentorName: "cleo Sales",
       CompanyId: 2
    }];
    
    
    
    
    
    
    
    
    var allPositions = [{
        Id: 1,
        PositionName: "Intern dev",
        MentorId: 1
    }, {
        Id: 2,
        PositionName: "Intern Infrastracture",
        MentorId: 2
    }, {
        Id: 3,
        PositionName: "Intern sales",
        MentorId: 3
    },{
        Id: 4,
        PositionName: "Intern BA",
        MentorId: 4
    }, {
        Id: 5,
       PositionName: "Intern dev",
        MentorId: 5
    } , {
        Id: 6,
       PositionName: "Intern Hr",
        MentorId: 6
    }, {
        Id: 7,
       PositionName: "Intern sales",
        MentorId: 7
    }];

    $scope.Companies = allCompanies;

    $scope.$watch('Company', function () {
        $scope.Mentors = allMentors.filter(function (s) {
            return s.CompanyId == $scope.Company.Id;
        });
        $scope.Position = {};
        $scope.Mentor = {};
        $scope.Positions = [];
    });

    $scope.$watch('Mentor', function () {
        $scope.Positions = allPositions.filter(function (c) {
            return c.MentorId == $scope.Mentor.Id;
        });
        $scope.Position = {};
    });

  });
