/**
 * Created by tostrowski on 20/11/2016.
 */
services.factory('ThemeListService', ['$resource','$location',
    function($resource){
        return{
            getAllThemes: function() {
                return $resource("http://localhost:8080/themes", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },

            deleteTheme: function(id) {
                return $resource("http://localhost:8080/themes/"+id, {}, {
                    query: {
                        method: 'DELETE',
                        cache: false,
                        isArray: false
                    }
                });
            },

            deleteSubTheme: function(idTheme, idSubTheme) {
                return $resource("http://localhost:8080/themes/"+idTheme+"/subthemes/"+idSubTheme, {}, {
                    query: {
                        method: 'DELETE',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }}]);