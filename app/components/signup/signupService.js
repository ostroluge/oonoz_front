
'use strict';
services.factory('SignUpService', ['$resource','$location',
    function($resource){
        return {
            signUpPlayer: function () {
              //  return $resource("http://localhost:8092/user/signUpPlayer", {}, {
                    return $resource("http://5.135.165.108:8092/user/signUpPlayer", {}, {

                    save: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            signUpSupplier: function () {
               // return $resource("http://localhost:8080/user/signUpSupplier",{},
                return $resource("http://localhost:8092/user/signUpSupplier",{}, {

                    save: {
                        method: 'POST',
                        cache: false, isArray: false
                    }
                });
            },
            validationSignUp: function (mail,key) {
               // return $resource("http://localhost:8080/user/validationMail?mail="+mail+"&key="+key, {}, {
                    return $resource("http://5.135.165.108:8092/user/validationMail?mail="+mail+"&key="+key, {}, {

                    query: {
                        method: 'GET',
                        cache: false, isArray: false
                    }
                });
            }
        }}]);

