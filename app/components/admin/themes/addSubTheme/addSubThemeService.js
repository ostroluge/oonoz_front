/**
 * Created by tostrowski on 20/11/2016.
 */
services.factory('AddSubThemeService', ['$resource', '$location',
    function ($resource) {
        return {
            postSubTheme: function (id) {
               // return $resource("http://localhost:8080/themes/"+id+"/subthemes", {}, {
                    return $resource("http://5.135.165.108:8092/Oonoz/themes/"+id+"/subthemes", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }
    }]);