/**
 * Created by tostrowski on 24/10/2016.
 */
services.factory('TermService', ['$resource',
    function ($resource) {
        return {
            terms:function(type) {
                //return $resource("http://localhost:8080/terms/" + type, {}, {
                    return $resource("http://5.135.165.108:8092/Oonoz/terms/" + type, {}, {
                   query: {
                       method: 'GET',
                       cache: false, isArray: false
                   }
                });
            }
        }
    }
]);