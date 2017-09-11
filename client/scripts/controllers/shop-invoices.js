'use strict';

//angular.module('app', ['ui.bootstrap','ui.utils']);

app.controller("InvoicesCtrl", function($scope) {
  $scope.Interns=[
       {
            "id": "1",
            "name": "tshegofatso",
            "surname": "mojela",
            "email": "mojelatshego@skhomotech.co.za",
            "gender": "male",
            "company": "skhomo technologies",
            "contacts": "27726885360"
        }
      
      
    ,{
		    "id": "2",
            "name": "thulani",
            "surname": "malatjie",
            "email": "malatjie@skhomotech.co.za",
            "gender": "male",
            "company": "skhomo technologies",
            "contacts": "27726873635"
       },
       {
		    "id": "3",
            "name": "naftalie",
            "surname": "morwa",
            "email": "Nmorwa@skhomotech.co.za",
            "gender": "male",
            "company": "skhomo technologies",
            "contacts": "27265343434"
       },
         {
		    "id": "4",
            "name": "fatso",
            "surname": "kutu",
            "email": "Fkutu@skhomotech.co.za",
            "gender": "male",
            "company": "skhomo technologies",
            "contacts": "27264735364"
       },
        { 
            "id": "5",
            "name": "pedi",
            "surname": "maleka",
            "email": "pmaleka@skhomotech.co.za",
            "gender": "shemale",
            "company": "skhomo technologies",
            "contacts": "27273456123"
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
       $scope.Interns=angular.copy(Intern);
  }
       
    };
  $scope.remove = function(n){
      //NB this will change to "EASY way " once connected to DB
      if (confirm("are you sure you want to delete") == true) {
      $scope.Interns.splice(n,1);
  }
     
	};

    //add into a table
    $scope.addNewIntern=function(newIntern)
     {
      
      //   var i = $scope.Interns.length +1;
    // $scope.Interns[i]= Object.entries(newIntern).map((value)=>(value));
      var i = $scope.Interns.length;   
       $scope.Interns[i]=newIntern

     };
    
    
  
    
});
