services.factory('PresentationQcmService', ['$resource', function ($resource) {
    return {
        getQcm: function (id) {
            return $resource("http://localhost:8092/qcms/" + id, {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        },

        getFeedback: function (id) {
            return $resource("http://localhost:8092/qcms/" + id + "/feedback", {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        }
    }
}]);