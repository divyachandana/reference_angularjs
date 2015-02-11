/**
 * Created by dchandana on 2/5/2015.
 */
'use strict';

eventsApp.factory('user_Data', ['userResource', function (userResource) {
//    debugger;
    return {
        getUser:function(userName, callback) {
            return userResource.get({userName:userName}, function (user) {
                if (callback)
                    callback(user);
            });
        },
        saveUser:function(user) {
            userResource.save(user);
        },
        users:function () {
            return userResource.queryAll(function(users) {
                return users;
            });
        }
    };
}]);