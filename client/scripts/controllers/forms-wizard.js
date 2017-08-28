'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller("FormWizardCtrl", function($scope) {
  $scope.Companies=[
       {
            "registrationId": "1",
            "name": "Skhomotech",
            "email": "info@skhomotech.co.za",
            "website": "www.skhomotech.co.za",
            "address": " 325 Rivonia Blvd, Edenburg, Sandton, 2128",
            "contacts": "011 053 6076"
        }
      
      
    ,{
		   "registrationId": "2",
            "name": "IT Solution",
            "email": "info@itSolution.co.za",
            "website": "www.itSolution.co.za",
            "address": " Pro Equity Court, 13 Ground Floor, 1250 Pretorius Street, Hatfield, Pretoria",
            "contacts": "011 053 6076"
       },
       {
		      "registrationId": "3",
            "name": "AxisWorkGroup",
            "email": "info@axizworkgroup.com ",
            "website": "www.axizworkgroup.com ",
            "address": " International Business Gateway, 6th Rd, Midridge Park, Midrand, 1683",
            "contacts": "011 237 7000"
       },
         {
		   "registrationId": "4",
            "name": "ASD Solutions",
            "email": "info@info@asd.co.za",
            "website": "www.info@asd.co.za",
            "address": " 275 Johannesburgweg, La Rochelle, Johannesburg South, 2190",
            "contacts": "011 435 0010"
       },
        { 
          "registrationId": "5",
            "name": "IT mitel",
            "email": "info@itSolution.co.za",
            "website": "www.mitel.com",
            "address": " 5850 Granite Parkway Suite 600 Plano, TX 75024 Pretoria",
            "contacts": "011 574 8000 "
         },

    ]


//$scope.dataTableOpt = {
//   //custom datatable options
//  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
//  };
//    
//    
//  $scope.selected=[];
//  $scope.getTemplates=function(Intern){
//    //some time bellow if will throw expection like $scope.selected[0] is undefined,because on the view you stating on 1 but array always starts on 0
//   if(Intern[0]===$scope.selected[0]){
//     return "edit.html";
//   }else{
//    return "view.html";
//   }
//  };
    
  
  $scope.edit=function(u){
//      $scope.selected = angular.copy(u);
      $scope.editMode=true;
//      $scope.Companies=angular.copy(u);

  };
  

      $scope.clear=function(){
     $scope.editMode=false;

  };
        $scope.save=function(){
    if (confirm("are you sure you want to save the changes?") == true) {
       $scope.Companies=angular.copy(Company);
  }
       
    };
  $scope.remove = function(n){
      //NB this will change to "EASY way " once connected to DB
      if (confirm("are you sure you want to delete") == true) {
      $scope.Companies.splice(n,1);
  }
     
	};

    //add into a table
    $scope.addNewCompany=function(newCompany)
     {
      
  
      var i = $scope.Companies.length;   
       $scope.Companies[i]=newCompany;

     };
    
    
  
    
});
