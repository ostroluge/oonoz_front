/**
 * Created by Jeremy on 09/03/2017.
 */
services.factory('statService', ['$resource', '$location',
    function ($resource) {
        return {
            getStat: function () {
                return $resource("http://5.135.165.108:8092/Oonoz/user/stat", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            }
        }
    }]);