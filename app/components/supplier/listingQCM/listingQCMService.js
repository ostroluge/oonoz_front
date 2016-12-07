/**
 * Created by Jeremy on 05/12/2016.
 */
services.factory('listingQCMService', ['$resource', '$location',
    function ($resource) {
        return {
            getSupplierQCM: function () {
                return $resource("http://localhost:8092/user/getSupplierQCM", {}, {
                    generate: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            }
        }
}]);