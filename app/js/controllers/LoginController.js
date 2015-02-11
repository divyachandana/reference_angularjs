/**
 * Created by dchandana on 2/5/2015.
 */
'use strict';

eventsApp.controller('LoginController',
    function LoginController($scope, $location, User_Data, authService) {
        //$scope.user = {userName:"", password:""};
        $scope.login = function (u_s_e_r) {
            User_Data.getUser(u_s_e_r.userName, function (user) {
                if (!!user && user.password === u_s_e_r.password) {
                    authService.setCurrentUser(user);
                    $location.url('/events');
                }
            });
        };
    }
);