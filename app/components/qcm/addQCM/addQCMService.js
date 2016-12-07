'use strict';
services.factory('AddQCMService', ['$resource',function ($resource) {
    return {
        postQCM: function (id) {
            return $resource("http://localhost:8092/qcms/"+id, {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        }
    }}]);
