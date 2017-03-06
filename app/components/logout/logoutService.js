'use strict';
services.factory('LogoutService', ['$resource','$location',
    function($resource){
        return{
            logout:function() {
                //   return $resource("http://localhost:8080/user/login", {}, {
                return $resource("http://localhost:8092/user/logout", {}, {
                    query: {
                        method: 'GET',
                        cache: false, isArray: false
                    }
                });
            }
        }}]);