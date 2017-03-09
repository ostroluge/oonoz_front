/**
 * Created by Jeremy on 12/02/2017.
 */


services.factory('profilService', ['$resource', '$location',
    function ($resource) {
        return {
            getUser: function () {
                return $resource("http://5.135.165.108:8092/Oonoz/user/profil", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updatePlayer: function(){
                return $resource("http://5.135.165.108:8092/Oonoz/user/updatePlayer", {}, {
                    // return $resource("http://localhost:8092/admin/updatePlayer", {}, {
                    query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updateSupplier: function(){
                return $resource("http://5.135.165.108:8092/Oonoz/user/updateSupplier", {}, {
                    // return $resource("http://localhost:8092/admin/updateSupplier", {}, {
                    query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },
            requestSupplierStatus: function(idPlayer){
                console.log("service supplier Status :  "+idPlayer);
                return $resource("http://5.135.165.108:8092/Oonoz/user/requestSupplierStatus", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: false,
                        params:{
                            "idPlayer":idPlayer
                        }
                    }
                });
            }
        }
    }]);