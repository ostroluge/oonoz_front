/**
 * Created by Jeremy on 16/01/2017.
 */
services.factory('themeService', ['$resource', '$location',
    function ($resource) {
        return {
            getAllValidatedThemes: function() {
                return $resource("http://5.135.165.108:8092/Oonoz/validatedThemes", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },
            getThemeSubTheme: function(idTheme){
                return $resource("http://5.135.165.108:8092/Oonoz/themes/"+idTheme+"/subthemes", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            }
        }
    }]);