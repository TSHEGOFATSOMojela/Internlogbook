'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
app
  .controller('DashboardCtrl', function($scope,$http){
    $scope.page = {
      title: 'Dashboard',
      subtitle: 'Place subtitle here...'
    };

    $scope.getUsers = function(){
      $scope.data=[];
      var url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&delay=3&callback=JSON_CALLBACK';

      $http.jsonp(url).success(function(data){
          $scope.data=data;
      });
    };

    $scope.getUsers();
  })
  .controller('StatisticsChartCtrl', function ($scope) {

    $scope.dataset = [{
      data: [[1,15],[2,40],[3,35],[4,39],[5,42],[6,50],[7,46],[8,49],[9,59],[10,60],[11,58],[12,74]],
      label: 'Unique Visits',
      points: {
        show: true,
        radius: 4
      },
      splines: {
        show: true,
        tension: 0.45,
        lineWidth: 4,
        fill: 0
      }
    }, {
      data: [[1,50],[2,80],[3,90],[4,85],[5,99],[6,125],[7,114],[8,96],[9,130],[10,145],[11,139],[12,160]],
      label: 'Page Views',
      bars: {
        show: true,
        barWidth: 0.6,
        lineWidth: 0,
        fillColor: { colors: [{ opacity: 0.3 }, { opacity: 0.8}] }
      }
    }];

    $scope.options = {
      colors: ['#e05d6f','#61c8b8'],
      series: {
        shadowSize: 0
      },
      legend: {
        backgroundOpacity: 0,
        margin: -7,
        position: 'ne',
        noColumns: 2
      },
      xaxis: {
        tickLength: 0,
        font: {
          color: '#fff'
        },
        position: 'bottom',
        ticks: [
          [ 1, 'JAN' ], [ 2, 'FEB' ], [ 3, 'MAR' ], [ 4, 'APR' ], [ 5, 'MAY' ], [ 6, 'JUN' ], [ 7, 'JUL' ], [ 8, 'AUG' ], [ 9, 'SEP' ], [ 10, 'OCT' ], [ 11, 'NOV' ], [ 12, 'DEC' ]
        ]
      },
      yaxis: {
        tickLength: 0,
        font: {
          color: '#fff'
        }
      },
      grid: {
        borderWidth: {
          top: 0,
          right: 0,
          bottom: 1,
          left: 1
        },
        borderColor: 'rgba(255,255,255,.3)',
        margin:0,
        minBorderMargin:0,
        labelMargin:20,
        hoverable: true,
        clickable: true,
        mouseActiveRadius:6
      },
      tooltip: true,
      tooltipOpts: {
        content: '%s: %y',
        defaultTheme: false,
        shifts: {
          x: 0,
          y: 20
        }
      }
    };
  })

  .controller('ActualStatisticsCtrl',function($scope){
    $scope.easypiechart = {
      percent: 100,
      options: {
        animate: {
          duration: 3000,
          enabled: true
        },
        barColor: '#418bca',
        scaleColor: false,
        lineCap: 'round',
        size: 140,
        lineWidth: 4
      }
    };
    $scope.easypiechart2 = {
      percent: 75,
      options: {
        animate: {
          duration: 3000,
          enabled: true
        },
        barColor: '#e05d6f',
        scaleColor: false,
        lineCap: 'round',
        size: 140,
        lineWidth: 4
      }
    };
    $scope.easypiechart3 = {
      percent: 46,
      options: {
        animate: {
          duration: 3000,
          enabled: true
        },
        barColor: '#16a085',
        scaleColor: false,
        lineCap: 'round',
        size: 140,
        lineWidth: 4
      }
    };
  })

  .controller('BrowseUsageCtrl', function ($scope) {

    $scope.donutData = [
      {label: 'Total Users', value: 40, color: '#00695c'},
      {label: 'Companies', value: 20, color: '#ff4444'},
      {label: 'Mentors', value: 20, color: '#0099CC'},
      {label: 'Interns', value: 20, color: '#263238'}
    ];

    $scope.oneAtATime = true;

    $scope.status = {
      isFirstOpen: true,
      tab1: {
        open: true
      },
      tab2: {
        open: false
      },
      tab3: {
        open: false
      }
    };

  })

  .controller('RealtimeLoadCtrl', function($scope, $interval){

    $scope.options1 = {
      renderer: 'area',
      height: 133
    };

    $scope.seriesData = [ [], []];
    var random = new Rickshaw.Fixtures.RandomData(50);

    for (var i = 0; i < 50; i++) {
      random.addData($scope.seriesData);
    }

    var updateInterval = 800;

    $interval(function() {
      random.removeData($scope.seriesData);
      random.addData($scope.seriesData);
    }, updateInterval);

    $scope.series1 = [{
      name: 'Series 1',
      color: 'steelblue',
      data: $scope.seriesData[0]
    }, {
      name: 'Series 2',
      color: 'lightblue',
      data: $scope.seriesData[1]
    }];

    $scope.features1 = {
      hover: {
        xFormatter: function(x) {
          return new Date(x * 1000).toUTCString();
        },
        yFormatter: function(y) {
          return Math.floor(y) + '%';
        }
      }
    };
  })

//  .controller('ProjectProgressCtrl', function($scope, DTOptionsBuilder, DTColumnDefBuilder){
//
//     var date = new Date();
//    var d = date.getDate();
//    var m = date.getMonth();
//    var y = date.getFullYear();
//    
//    $scope.activities =[{objectname:"Strongloop",activity:"studying",comment:"i will finish it soon",duration:"3hrs 30mins",dates:date},
//                       {objectname:"MongoDB",activity:"creating database",comment:"it was easy",duration:"2hrs",dates:date},
//                       {objectname:"Linex",activity:"hacking absa bank",comment:"i did get access but there was no money",duration:"2hrs 30mins",dates:date}];
//    $scope.leaves =[{leaveType:"sick leave",From:date,To:new Date(y, m, d +3),comment:"Flu is killing me",attachment:"sick note"},
//                       {leaveType:"annual leave",From:date,To:new Date(y, m, d +13),comment:"Family matter",attachment:"approval note"},
//                       {leaveType:"parental leave",From:date,To:new Date(y, m, d +1),comment:"urgent",attachment:"approval note"}]
//    
//    $scope.projects = [{
//      title: 'Strongloop',
//      priority: {
//        value: 1,
//        title: 'Please study this for exam',
//        duration: new Date(y, m, d +30)  
//      },
//      status: 42,
//      chart: {
//        data: [1,3,2,3,5,6,8,5,9,8],
//        color: '#cd97eb'
//      }
//    },{
//      title: 'MongoDB',
//      priority: {
//        value: 3,
//        title: 'back-end must be done using mongodb',
//        duration:new Date(y, m, d + 15)  
//      },
//      status: 89,
//      chart: {
//        data: [2,5,3,4,6,5,1,8,9,10],
//        color: '#a2d200'
//      }
//    },{
//      title: 'Linex',
//      priority: {
//        value: 1,
//        title: 'we are about to hack',
//        duration:new Date(y, m, d +7) 
//      },
//      status: 23,
//      chart: {
//        data: [5,6,8,2,1,6,8,4,3,5],
//        color: '#ffc100'
//      }
//    }];
//
//     
//    
//    $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();
//    $scope.dtColumnDefs = [
//      DTColumnDefBuilder.newColumnDef(0),
//      DTColumnDefBuilder.newColumnDef(1),
//      DTColumnDefBuilder.newColumnDef(2),
//      DTColumnDefBuilder.newColumnDef(3),
//      DTColumnDefBuilder.newColumnDef(4).notSortable()
//    ];
//        
//  });
//
