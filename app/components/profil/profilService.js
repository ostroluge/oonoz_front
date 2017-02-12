/**
 * Created by Jeremy on 12/02/2017.
 */


services.factory('profilService', ['$resource', '$location',
    function ($resource) {
        return {
            getUser: function () {
                return $resource("http://localhost:8092/user/profil", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: false
                    }
                });
            }

        }
    }]);