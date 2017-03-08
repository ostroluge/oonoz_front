'use strict';
services.factory('QcmDetailService', ['$resource',function ($resource) {
    return {
        getQcm: function (id) {
            return $resource("http://5.135.165.108:8092/Oonoz/qcms/"+id, {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        },
        deleteQCM:function(id){
            return $resource("http://5.135.165.108:8092/Oonoz/qcms/"+id, {}, {
                query: {
                    method: 'DELETE',
                    cache: false,
                    isArray: false
                }
            });
        }
    }}]);