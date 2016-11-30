services.factory('UserListService', ['$resource','$location',
    function($resource) {
        return {
            filteredSearch: function () {
              //  return $resource("http://localhost:8080/admin/filteredSearch", {}, {
                    return $resource("http://localhost:8092/admin/filteredSearch", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updatePlayer: function(){
             //   return $resource("http://localhost:8080/admin/updatePlayer", {}, {
                    return $resource("http://localhost:8092/admin/updatePlayer", {}, {
                    query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updateSupplier: function(){
            //    return $resource("http://localhost:8080/admin/updateSupplier", {}, {
                    return $resource("http://localhost:8092/admin/updateSupplier", {}, {
                    query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },
            deleteUser: function(idPlayer){
            //    return $resource("http://localhost:8080/admin/deleteUser", {}, {
                    return $resource("http://localhost:8092/admin/deleteUser", {}, {
                    query: {
                        method: 'DELETE',
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