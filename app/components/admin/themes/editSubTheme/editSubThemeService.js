/**
 * Created by tostrowski on 21/11/2016.
 */
services.factory('EditSubThemeService', ['$resource', '$location',
    function ($resource) {
        return {
            editSubTheme: function (idTheme, idSubTheme) {
                return $resource("http://5.135.165.108:8092/Oonoz/themes/"+idTheme+"/subthemes/"+idSubTheme, {}, {
               //     return $resource("http://localhost:8080/themes/"+idTheme+"/subthemes/"+idSubTheme, {}, {

                        query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },
            getSubTheme: function (idTheme, idSubTheme) {
                return $resource("http://5.135.165.108:8092/Oonoz/themes/"+idTheme+"/subthemes/"+idSubTheme, {}, {
                    //  return $resource("http://localhost:8080/themes/"+idTheme+"/subthemes/"+idSubTheme, {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }
    }]);