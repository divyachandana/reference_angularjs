/**
 * Created by dchandana on 2/5/2015.
 */
eventsApp.factory("UserData",function($resource,authService){

        var userdata_path=$resource('/data/user/:userName',{userName:'@userName'});
        return{
            save_UserData:function(userprofile){

                userdata_path.query(function(data){

                    authService.setCurrentUser(userprofile);
                    var newuser=authService.getCurrentUserName();
                    //window.alert(newuser);
                    var count=0;
                    for(var i=0;i<data.length;i++)
                        {
                            authService.setCurrentUser(data[i].userName);
                            var check_existing=authService.getCurrentUser();
                            //window.alert("existingggggggggg"+check_existing);
                            if(newuser != check_existing)
                            {
                                count=1;

                            }
                            else
                            {
                                count=0;
                                break;
                            }
                        }
                    if(count==1)
                    {
                        userprofile.userName=newuser;
                        userdata_path.save(userprofile);
                        window.alert(userprofile.userName+"  "+"Saved Successfully");
                        window.location="/EditProfile.html";

                    }
                    else
                    {
                        window.alert("Username already exists try new user name");
                    } }

                );


            }
        };

    }

);