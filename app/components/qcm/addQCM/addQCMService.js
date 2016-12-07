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
        },
        getThemes: function () {
            return $resource("http://localhost:8092/themes", {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: true
                }
            });
        },
        getSubThemes: function (idTheme) {
            return $resource("http://localhost:8092/themes/"+idTheme+"/subthemes", {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: true
                }
            });
        }
    }}]);
