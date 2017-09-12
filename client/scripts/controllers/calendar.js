'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the minovateApp
 */
app
  .controller('CalendarCtrl', ['$scope','$state','Objective','Activity','Meeting','Leave','$compile','uiCalendarConfig', function($scope,$state,Objective,Activity,Meeting,Leave, $compile, uiCalendarConfig) {
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var indexer = 0;

    /* event source that pulls from google.com */
    $scope.eventSource = {
      url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
      className: 'gcal-event',           // an option!
      currentTimezone: 'America/Chicago' // an option!
    };

      $scope.leave = ["Annual Leave", "Maternity Leave", "Sick Leave","Family Responsibility Leave","Study Leave","Leave for religious holidays","Unpaid leave"];
    /* event source that contains custom events on the scope */
    $scope.object={};
    $scope.objectives = Objective.find();  
    $scope.events = Activity.find({
      filter: {
        include: [
          'objective'
        ]
      }
    });
    $scope.leaves = Leave.find({
      filter: {
        include: [
          'logUser'
        ]
      }
    });
     $scope.meetings = Meeting.find({
      filter: {
        include: [
          'logUser'
        ]
      }
    });  


    
    /* alert on dayClick */
    $scope.precision = 400;
    $scope.lastClickTime = 0;
    $scope.doubleClick = function( date, jsEvent, view ){
      var time = new Date().getTime();
      if(time - $scope.lastClickTime <= $scope.precision){
        $scope.events.push({
//          title: 'New Activity',
          desc:'description',    
          start: date,
          className: ['b-l b-2x b-info'],
          comment:'add comment'   
        });
      }
      $scope.lastClickTime = time;
    };

    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
      $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
   
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view){
      $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };

    $scope.overlay = angular.element('.fc-overlay');

    $scope.alertOnMouseOver = function( event, jsEvent, view ){
      $scope.event = event;  
      $scope.overlay.removeClass('left right');
      var wrap = angular.element(jsEvent.target).closest('.fc-event');
      var cal = wrap.closest('.calendar');
      var left = wrap.offset().left - cal.offset().left;
      var right = cal.width() - (wrap.offset().left - cal.offset().left + wrap.width());
      if( right > $scope.overlay.width() ) {
        $scope.overlay.addClass('left');
      } else if ( left > $scope.overlay.width() ) {
        $scope.overlay.addClass('right');
      }
      if (wrap.find('.fc-overlay').length === 0) {
        wrap.append( $scope.overlay );
      }
    };
    
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 550,
        hiddenDays: [ 0, 6 ],
        allDay:false,  
        businessHours: {
            dow: [ 1, 2, 3, 4, 5 ], 
            start: '07:30', 
            end: '16:30', 
            } , 
        editable: true,
        header:{
          left: 'prev',
          center: 'title',
          right: 'next'
           
        },
        dayClick: $scope.doubleClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventMouseover: $scope.alertOnMouseOver  
      }
    };

    $scope.hstep = 0;
    $scope.mstep = 0;

    $scope.options = {
      hstep: [0,1, 2, 3, 4, 5, 6, 7, 8],
      mstep: [0, 5, 10, 15, 25, 30]
    }; 
   $scope.addEvent = function() {
      Activity
        .create({
          title: $scope.newAct.title,
          duration:{"hour": $scope.newAct.hour,
                    "minutes": $scope.newAct.minutes},
          comment: $scope.newAct.comment,
          start: $scope.newAct.date,
          objectiveId:$scope.object.selected.id
         }).$promise
        .then(function() {
          //location go to view company page
          $state.go('app.calendar');
        });
    };

        /*add meeting*/
        $scope.addMeeting = function() {
         Meeting
           .create({
              title: $scope.newMeet.title,
              duration:{"hour": $scope.newMeet.hour,
                    "minutes": $scope.newMeet.minutes},
              start: $scope.newMeet.date,
              comment: $scope.newMeet.comment
         }).$promise
        .then(function() {
          //location go to view company page
          $state.go('app.calendar');
        });
    };
    
      /* add custom leave*/
        $scope.addLeave = function() {
         Leave
           .create({
              title: $scope.newLv.title,
              start: $scope.newLv.date,
              end: $scope.newLv.dateTo,
              comment: $scope.newLv.comment,
              Attachment:{"note": $scope.newLv.note}
         }).$promise
        .then(function() {
          //location go to view company page
          $state.go('app.calendar');
        });
    };
 
    
    
    /* remove activity */
    $scope.removeActivity = function(index) {
      $scope.events.splice(index,1);
    };
     /* remove leave */
    $scope.removeLeave = function(index) {
      $scope.leaves.splice(index,1);
    };
    
     /* remove meeting */
    $scope.removeMeeting = function(index) {
      $scope.meetings.splice(index,1);
    };

    /* Change View */
    $scope.changeView = function(view, calendar) {
      angular.element('.calendar').fullCalendar('changeView', view);
    };

    $scope.today = function(calendar) {
      angular.element('.calendar').fullCalendar('today');
    };
      
       /* event sources array*/
    $scope.eventSources = [$scope.events,$scope.leaves,$scope.meetings];

      
  }]);




