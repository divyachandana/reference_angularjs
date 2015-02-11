'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource','ngRoute'])
    .config(function($routeProvider){
            $routeProvider.when('/newEvent',{
                templateUrl:'templates/NewEvent.html',
                controller: 'myEditEventController'
            });
        $routeProvider.when('/EditProfile',{
            templateUrl:'templates/EditProfile.html',
            controller: 'EditProfileController'
        });

    });
