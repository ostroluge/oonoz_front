'use strict';
services.factory('AddQCMService', ['$resource',function ($resource) {
    return {
        postQCM: function () {
            return $resource("http://5.135.165.108:8092/Oonoz/qcms", {}, {
                query: {
                    method: 'POST',
                    cache: false,
                    isArray: false
                }
            });
        },
        getThemes: function () {
            return $resource("http://5.135.165.108:8092/Oonoz/themes", {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: true
                }
            });
        },
        getValidatedThemes: function () {
            return $resource("http://5.135.165.108:8092/Oonoz/validatedThemes", {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: true
                }
            });
        },
        getSubThemes: function (idTheme) {
            return $resource("http://5.135.165.108:8092/Oonoz/themes/"+idTheme+"/subthemes", {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: true
                }
            });
        },
        getSuppliers: function () {
            return $resource("http://5.135.165.108:8092/Oonoz/user/suppliers", {}, {
               query: {
                   method: 'GET',
                   cache: false,
                   isArray: true
               }
            });
        },
        addSubTheme: function (idQCM, idSubTheme) {
            return $resource("http://5.135.165.108:8092/Oonoz/qcms/"+idQCM+"/subthemes/"+idSubTheme, {}, {
               query: {
                   method: 'POST',
                   cache: false,
                   isArray: false
               }
            });
        }
    }}]);
