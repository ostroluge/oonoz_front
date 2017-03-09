'use strict';
services.factory('LoginService', ['$resource','$location',
    function($resource){
        return{
            login:function(username,password) {
             //   return $resource("http://localhost:8080/user/login", {}, {
                    return $resource("http://5.135.165.108:8092/Oonoz/user/login", {}, {
                    query: {
                        method: 'GET', headers: {Authorization: "Basic " + btoa(username + ":" + password)},
                        cache: false, isArray: false
                    }
                });
            }
        }}]);