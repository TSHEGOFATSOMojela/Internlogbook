'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller("FormsValidateCtrl", function($scope) {
  $scope.Mentors=[
       {
            "id": "1",
            "name": "tshegofatso",
            "surname": "mojela",
            "email": "tmojela@skhomotech.co.za",
            "company": "skhomo technologies",
            "department": "Business Analyst",
            "contacts": "27726885360"
           
        }
      
      
    ,{
		    "id": "2",
            "name": "tseko",
            "surname": "Mashego",
            "email": "tmashego@skhomotech.co.za",
            "company": "skhomo technologies",
            "department": "development",
            "contacts": "277264748373"
       },
       {
		    "id": "3",
           "name": "theo",
            "surname": "molepo",
            "email": "tmolepo@skhomotech.co.za",
            "company": "skhomo technologies",
            "department": "Sales",
            "contacts": "27729876543"
       },
         {
		    "id": "4",
             "name": "tshepo",
            "surname": "moremela",
            "email": "moremelatshepo@skhomotech.co.za",
            "company": "skhomo technologies",
            "department": "Infrastructure",
            "contacts": "27726887654"
       },
        { 
            "id": "5",
            "name": "lehlogonolo",
            "surname": "molepo",
            "email": "lmolepo@skhomotech.co.za",
            "company": "skhomo technologies",
            "department": "finance",
            "contacts": "27723874645"
         },

    ]

//
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
      $scope.Interns=angular.copy(u);

  };
  
// $scope.save=function(){
//    //custom save function here 
//    //Onces custom save function got success then empty it
//    $.each($scope.Interns,(k,v)=>{
//      if(v[0]===$scope.selected[0]){
//        $scope.Interns[k]=$scope.selected;
//      }
//    });
//     $scope.selected=[];
//  };
//   $scope.clear=function(){
//    $scope.selected=[];
//    $scope.editingMode=false;
//  };
      $scope.clear=function(){
     $scope.editMode=false;

  };
        $scope.save=function(){
    if (confirm("are you sure you want to save the changes?") == true) {
       $scope.Mentors=angular.copy(Mentor);
  }
       
    };
  $scope.remove = function(n){
      //NB this will change to "EASY way " once connected to DB
      if (confirm("are you sure you want to delete") == true) {
      $scope.Mentors.splice(n,1);
  }
     
	};

    //add into a table
    $scope.addNewMentors=function(newMentor)
     {
      
      //   var i = $scope.Interns.length +1;
    // $scope.Interns[i]= Object.entries(newIntern).map((value)=>(value));
      var i = $scope.Mentors.length;   
       $scope.Mentors[i]=newMentor;

     };
    
    
  
    
});
