'use strict';
services.factory('QcmDetailService', ['$resource',function ($resource) {
    return {
        getQcm: function (id) {
            return $resource("http://localhost:8092/qcms/"+id, {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        }}}]);