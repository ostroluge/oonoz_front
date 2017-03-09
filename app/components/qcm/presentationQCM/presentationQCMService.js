services.factory('PresentationQcmService', ['$resource', function ($resource) {
    return {
        getQcm: function (id) {
            return $resource("http://5.135.165.108:8092/Oonoz/qcms/"+id, {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        },

        getFeedback: function (id) {
            return $resource("http://5.135.165.108:8092/Oonoz/qcms/" + id + "/feedback", {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        }
    }
}]);