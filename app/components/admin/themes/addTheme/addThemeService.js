/**
 * Created by tostrowski on 20/11/2016.
 */
services.factory('AddThemeService', ['$resource', '$location',
    function ($resource) {
        return {
            postTheme: function () {
        //        return $resource("http://localhost:8080/themes", {}, {
                    return $resource("http://localhost:8092/themes", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }
    }]);