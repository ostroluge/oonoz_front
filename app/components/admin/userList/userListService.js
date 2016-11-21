services.factory('UserListService', ['$resource','$location',
    function($resource) {
        return {
            filteredSearch: function () {
                return $resource("http://localhost:8080/user/filteredSearch", {}, {

                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updatePlayer: function(){
                return $resource("http://localhost:8080/user/updatePlayer", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            updateSupplier: function(){
                return $resource("http://localhost:8080/user/updateSupplier", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            }
        };
    }]);