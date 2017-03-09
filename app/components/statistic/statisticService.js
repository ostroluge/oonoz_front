/**
 * Created by Jeremy on 09/03/2017.
 */
services.factory('statService', ['$resource', '$location',
    function ($resource) {
        return {
            getStat: function () {
                return $resource("http://localhost:8092/user/stat", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            }
        }
    }]);