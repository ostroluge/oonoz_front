/**
 * Created by vincent on 05/12/2016.
 */
services.factory('QcmManagementService', ['$resource', '$location',
    function ($resource) {
        return {
            getValidatedQCM: function () {
                return $resource("http://5.135.165.108:8092/Oonoz/admin/getValidatedQCM", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },
            getNotValidatedQCM: function () {
                return $resource("http://5.135.165.108:8092/Oonoz/admin/getNotValidatedQCM", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },
            validateQCM: function (idQCM) {
                return $resource("http://5.135.165.108:8092/Oonoz/admin/validateQCM", {}, {
                    query: {
                        method: 'PUT',
                        cache: false,
                        isArray: true,
                        params: {
                            "idQCM": idQCM
                        }
                    }
                });
            },
            deleteQCM: function (idQCM) {
                return $resource("http://5.135.165.108:8092/Oonoz/admin/deleteQCM", {}, {
                    query: {
                        method: 'DELETE',
                        cache: false,
                        isArray: true,
                        params: {
                            "idQCM": idQCM
                        }
                    }
                });
            }
        }
    }]);