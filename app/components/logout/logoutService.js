'use strict';
services.factory('LogoutService', ['$resource','$location',
    function($resource){
        return{
            logout:function() {
                //   return $resource("http://localhost:8080/user/login", {}, {
                return $resource("http://5.135.165.108:8092/Oonoz/user/logout", {}, {
                    query: {
                        method: 'GET',
                        cache: false, isArray: false
                    }
                });
            }
        }}]);