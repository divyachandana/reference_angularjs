'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder,UserData) {
        $scope.user = {};
        $scope.saveProfile=function(user,form){
                //window.alert("this is invalid");
            if(form.$valid)
            {
                UserData.save_UserData(user);

            }
        };
        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        };
        $scope.cancleProfile=function(){
            window.location="/eventHome.html";
        };


    }
);
