/**
 * Created by tostrowski on 05/10/2016.
 */
services.factory('SignUpService', ['$resource','$location',
    function($resource){
        return {
            signUpPlayer: function () {
                return $resource("http://localhost:8080/user/signUpPlayer", {}, {

                    save: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            signUpSupplier: function () {
                return $resource("http://localhost:8080/user/signUpSupplier",{}, {

                    save: {
                        method: 'POST',
                        cache: false, isArray: false
                    }
                });
            },
            validationSignUp: function (mail,key) {
                return $resource("http://localhost:8080/user/validationMail?mail="+mail+"&key="+key, {}, {

                    query: {
                        method: 'GET',
                        cache: false, isArray: false
                    }
                });
            }
        }}]);

