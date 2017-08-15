turboApp.controller('TurboController', function TurboController($scope, uiCalendarConfig) {

  var startDate = "2014-01-22";
  var dayNames = ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];
  $scope.today = {};

  $scope.calendarOptions = {
      height: 450,
      editable: false,
      header:{
        left: '',
        center: 'title',
        right: 'today prev,next'
      },
      defaultDate: moment(startDate),
      lang: "sv",
      firstDay: 1,
      eventClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      viewRender: function(view, element) {
        var today = moment(view.start._i);
        $scope.today.dayShortName = dayNames[today.weekday()];
        $scope.today.monthName = today.date();
      }
    };
});
