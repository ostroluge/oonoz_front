/**
 * Created by Jeremy on 16/01/2017.
 */
services.factory('themeService', ['$resource', '$location',
    function ($resource) {
        return {
            getAllValidatedThemes: function() {
                return $resource("http://localhost:8092/validatedThemes", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },
            getThemeSubTheme: function(idTheme){
                return $resource("http://localhost:8092/themes/"+idTheme+"/subthemes", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            }
        }
    }]);