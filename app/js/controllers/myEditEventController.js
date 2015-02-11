/**
 * Created by dchandana on 2/4/2015.
 */
'use strict';
eventsApp.controller('myEditEventController',
    function myEditEventController($scope,myEventData){
    $scope.event={};
        $scope.saveEvent=function(event,form)
        {
                if(form.$valid)
                {
                    myEventData.saveEdit(event);
                        //.promise.then(
                        //function(response){ console.log('success',response);},
                        //function(response){ console.log('failure',response);}
                    //)
                    window.alert('your'+event.name+'is saved Successfully');
                   // window.location="/NewEvent.html";

                        }
        };
    $scope.cancleEvent =function(){
            window.location="/eventHome.html";

    };

    }
);