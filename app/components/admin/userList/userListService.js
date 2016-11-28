services.factory('UserListService', ['$resource','$location',
    function($resource) {
        return {
            filteredSearch: function () {
                return $resource("http://localhost:8080/admin/filteredSearch", {}, {

                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updatePlayer: function(){
                return $resource("http://localhost:8080/admin/updatePlayer", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updateSupplier: function(){
                return $resource("http://localhost:8080/admin/updateSupplier", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            }
        };
    }]);