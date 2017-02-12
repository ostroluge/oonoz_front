'use strict';

services.factory('PlayQCMService', ['$resource',
    function ($resource) {
        return {
            getValidatedQcm: function (id) {
                return $resource("http://localhost:8092/qcms/validated/" + id, {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }
    }]);
    
