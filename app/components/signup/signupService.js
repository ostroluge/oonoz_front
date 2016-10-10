/**
 * Created by tostrowski on 05/10/2016.
 */
services.factory('SignUpService', ['$resource','$location',
    function($resource){
                return $resource("http://localhost:8080/user/signupPlayer", {}, {
                    signup: {
                        method: 'POST',
                        cache: false, isArray: false
                    }
                });
            } ,
        ]);