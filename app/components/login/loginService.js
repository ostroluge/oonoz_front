
services.factory('LoginService', ['$resource','$location',
    function($resource){
        return{
            login:function(username,password) {
                return $resource("http://localhost:8080/user/login", {}, {
                    login: {
                        method: 'GET', headers: {Authorization: "Basic " + btoa(username + ":" + password)},
                        cache: false, isArray: false
                    }
                });
            } /*,

           logout:function(){
                return $resource("http://localhost:8080/user/logout", {}, {
                    logout: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });

            }*/


        }}]);