

'use strict';

eventsApp.controller('EventController',
    function EventController($scope,myEventData) {

        $scope.sortorder = 'name';

        //$scope.event=myEventData.getEvent();

         //myEventData.getEvent().then(
         //    function(event){ $scope.event =event;},
         //   function(statuscode){console.log(statuscode);}
         //);

        myEventData.getEvent().
            $promise.then(
            function(event){ $scope.event =event;
            console.log(event)},
              function(response){console.log(response);}
        );
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);
