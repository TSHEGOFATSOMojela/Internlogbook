'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the minovateApp
 */
app
  .controller('CalendarCtrl', function ($scope,$compile,uiCalendarConfig) {

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

    /* event source that contains custom events on the scope */
    $scope.events = [];
    $scope.leaves =[];
    $scope.meetings =[];
    
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
        allDay:true,  
        businessHours: {
            dow: [ 1, 2, 3, 4, 5 ], 
            start: '07:30', 
            end: '16:30', 
            } , 
        editable: false,
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

    /* add custom event document.getElementById("obj").value */
    $scope.addEvent = function() {
        $scope.events.push({
        Objective: $scope.objective[$scope.curr].objectname,  
        desc:$scope.objective[$scope.curr].desc,
        dur: $scope.objective[$scope.curr].duration,   
        title: 'New Activity',
        start: new Date(y, m, d),
        className: ['b-l b-2x b-info bg-dutch'],
        comment:'add comment'
      });
    };
    
    /*add meeting*/
        $scope.addMeeting = function() {
        $scope.meetings.push({
        title: 'New Meeting',
        start: new Date(y, m, d),
        className: ['b-l b-2x b-info bg-green'],
        comment:'add comment'
      });
    };
    
    /* add custom leave document.getElementById("obj").value */
    $scope.addLeave = function() {
        $scope.leaves.push({
        title: 'Leave',    
        leavetype: $scope.leave[$scope.curre],
        days: 'days',    
        start: new Date(y, m, d),
        end: new Date(y, m, d +2),     
        className: ['b-l b-2x b-warning bg-red'],
        comments:'add comment'   
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
    $scope.eventSources = [$scope.leaves,$scope.events,$scope.meetings];
   
    
/*get the index of selected objective*/
    $scope.setCurrent = function setCurrent(index) {
    $scope.curr = index;
};

    /*get the index of selected leave*/
    $scope.setCurrents = function setCurrents(index) {
    $scope.curre = index;
};

    
    $scope.leave = ["Annual Leave", "Maternity Leave", "Sick Leave","Family Responsibility Leave","Study Leave","Leave for religious holidays","Unpaid leave"];

    $scope.getLvIndex = function getLvIndex(index) {
    $scope.currIndex = index;  
   $scope.returnedLeav = $scope.leave[$scope.currIndex];
};

    $scope.objective =[{objectname:"Strongloop",desc:"Please study this for exam",duration:"8 days"},
                       {objectname:"MongoDB",desc:"back-end must be done using mongodb",duration:"5 days"},
                       {objectname:"Linex",desc:"we are about to hack",duration:"3 days"}];


    
            $scope.IsVisibleA = false;
            $scope.IsVisibleL = false;
            $scope.ShowPassport = function (value) {
                if($scope.IsVisibleA = value == "A"){
                    $scope.IsVisibleA = true;
                    $scope.IsVisibleL = false;
                }else if($scope.IsVisibleL = value == "L"){
                    $scope.IsVisibleL = true;
                    $scope.IsVisibleA = false;
                }
        
            }
            
    $scope.hstep = 0;
    $scope.mstep = 0;

    $scope.options = {
      hstep: [0,1, 2, 3, 4, 5, 6, 7, 8],
      mstep: [0, 5, 10, 15, 25, 30]
    };  
    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };
          
        $scope.showevent = false;
            $scope.showEvent = function () {
              return $scope.showevent = true;
            }
  });





