'use strict';

eventsApp.factory('eventResource', ['$resource', function ($resource) {
    var service1 = $resource('/data/event/:id', {id:'@id'});

    service1.queryAll = function (cb) {
        return service1.query({}, cb)
    };

    return service1;
}]);