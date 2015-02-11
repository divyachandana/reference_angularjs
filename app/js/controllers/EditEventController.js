'use strict';
eventsApp.controller('EditEventController',
    function EditEventController($scope){
        $scope.saveEvent=function (event,newEventForm){
            if(newEventForm.$valid){
            window.alert('your'+event.name+'is saved Successfully');}
        };
        $scope.cancleEvent=function(){
                window.location="/eventHome.html";
        };
    }
);