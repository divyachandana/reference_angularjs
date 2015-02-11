/**
 * Created by dchandana on 2/3/2015.
 */
//eventsApp.factory('myEventData',function($http,$log)
//eventsApp.factory('myEventData',function($http,$q)
eventsApp.factory('myEventData',function($resource)
    {
        var myresource=$resource('/data/event/:id',{id:'@id'});
        return {

            saveEdit:function(event){

                myresource.query(function(data){

                    console.log("Event ID In: " + data.length+1); //value is accessible here
                    event.id = data.length+1;
                    //eventData.save(event);
                    myresource.save(event);
                });

            },

            getallEvent:function(event){

                myresource.query(function(data){

                    console.log("Event ID In: " + data.length+1); //value is accessible here
                    event.id = data.length+1;
                    //eventData.save(event);
                    myresource.save(event);
                });

            },



            getEvent: function(){
                        return myresource.get({id:7});
                        //return $resource('/data/event/:id',{id:'@id'}).get({id:1});

                        //var deferred=$q.defer();
                        //$http({method : 'GET' , url:'/data/event/1'}).
                        //success(function(data,status,headers,config){
                        //        //$log.info(data,status,headers(),config);
                        //        //successcb(data);
                        //        deferred.resolve(data);
                        //}).
                        //error(function(data,status,headers,config){
                        //        //$log.warn(data,status,headers(),config);
                        //        deferred.reject(status);
                        //    });
                        //return deferred.promise;
                    }


             };



    }
);
