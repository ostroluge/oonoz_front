'use strict';
services.factory('AddQCMService', ['$resource',function ($resource) {
    return {
        postQCM: function () {
            return $resource("http://localhost:8092/qcms", {}, {
                query: {
                    method: 'POST',
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
        getValidatedThemes: function () {
            return $resource("http://localhost:8092/validatedThemes", {}, {
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
        },
        getSuppliers: function () {
            return $resource("http://localhost:8092/user/suppliers", {}, {
               query: {
                   method: 'GET',
                   cache: false,
                   isArray: true
               }
            });
        },
        addSubTheme: function (idQCM, idSubTheme) {
            return $resource("http://localhost:8092/qcms/"+idQCM+"/subthemes/"+idSubTheme, {}, {
               query: {
                   method: 'POST',
                   cache: false,
                   isArray: false
               }
            });
        }
    }}]);
