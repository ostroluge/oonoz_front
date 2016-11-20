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
            }
        }}]);