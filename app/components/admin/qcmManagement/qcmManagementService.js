/**
 * Created by vincent on 05/12/2016.
 */
services.factory('QcmManagementService', ['$resource', '$location',
    function ($resource) {
        return {
            getValidatedQCM: function () {
                return $resource("http://localhost:8092/admin/getValidatedQCM", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },
            getNotValidatedQCM: function(){
                return $resource("http://localhost:8092/admin/getNotValidatedQCM", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            }

        }
    }]);