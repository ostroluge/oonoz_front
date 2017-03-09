'use strict';

services.factory('PlayQCMService', ['$resource',
    function ($resource) {
        return {
            getValidatedQcm: function (id) {
                return $resource("http://5.135.165.108:8092/Oonoz/qcms/validated/" + id, {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: false
                    }
                });
            },
            finishQCM: function () {
                return $resource("http://5.135.165.108:8092/Oonoz/qcms/finishQCM", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }
    }]);
    
