/**
 * Created by dchandana on 2/5/2015.
 */
'use strict';

eventsApp.factory('userResource', ['$resource', function ($resource) {
    var service = $resource('/data/user/:userName', {userName:'@userName'}, { });

    service.queryAll = function (callback) {
        return service.query({}, callback)
    };

    return service;
}]);