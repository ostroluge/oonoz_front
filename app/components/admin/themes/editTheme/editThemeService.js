/**
 * Created by tostrowski on 21/11/2016.
 */
services.factory('EditThemeService', ['$resource', '$location',
    function ($resource) {
        return {
            editTheme: function (id) {
                return $resource("http://localhost:8080/themes/"+id, {}, {
                    query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },
            getTheme: function (id) {
                return $resource("http://localhost:8080/themes/"+id, {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }
    }]);