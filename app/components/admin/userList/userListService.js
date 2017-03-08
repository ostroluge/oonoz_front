services.factory('UserListService', ['$resource','$location',
    function($resource) {
        return {
            filteredSearch: function () {
              return $resource("http://5.135.165.108:8092/Oonoz/admin/filteredSearch", {}, {
                   // return $resource("http://localhost:8092/admin/filteredSearch", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updatePlayer: function(){
             return $resource("http://5.135.165.108:8092/Oonoz/admin/updatePlayer", {}, {
                   // return $resource("http://localhost:8092/admin/updatePlayer", {}, {
                    query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updateSupplier: function(){
             return $resource("http://5.135.165.108:8092/Oonoz/admin/updateSupplier", {}, {
                   // return $resource("http://localhost:8092/admin/updateSupplier", {}, {
                    query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },
            deleteUser: function(idPlayer){
            return $resource("http://5.135.165.108:8092/Oonoz/admin/deleteUser", {}, {
                   // return $resource("http://localhost:8092/admin/deleteUser", {}, {
                    query: {
                        method: 'DELETE',
                        cache: false,
                        isArray: false,
                        params:{
                            "idPlayer":idPlayer
                        }

                    }
                });
            },
            changeStatusUser: function(idPlayer){
                return $resource("http://5.135.165.108:8092/Oonoz/admin/changeStatusUser", {}, {
                //return $resource("http://localhost:8092/admin/changeStatusUser", {}, {
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
        };
    }]);