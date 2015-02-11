
'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, $location, eventData) {
      $scope.eventss = eventData.getAllEvents();

      //$scope.navigateToDetails = function (event) {
      // $location.url('/event/' + event.id);
      //};
    }
);
