'use strict';
services.factory('EditQCMService', ['$resource',function ($resource) {
    return {
        getQCM: function (id) {
            return $resource("http://localhost:8092/qcms/"+id, {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        }

    }}]);
