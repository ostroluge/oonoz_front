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
            updateUser: function(){
                return $resource("http://localhost:8080/user/updateUser", {}, {
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            }
        };
    }]);