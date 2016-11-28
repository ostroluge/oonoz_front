/**
 * Created by Jeremy on 20/11/2016.
 */

services.factory('suppliersRequestService', ['$resource', '$location',
    function ($resource) {
        return {
            getSupplierRequest: function () {
                return $resource("http://localhost:8080/admin/getSupplierRequest", {}, {
                    generate: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },
            refuse: function(id){
                return $resource("http://localhost:8080/admin/refuseSupplierRequest",{},{
                    query: {
                        method: 'DELETE',
                        cache: false,
                        isArray:false,
                        params:{
                            "idPlayer":id
                        }
                    }
                })
            },
            accept: function(id){
                return $resource("http://localhost:8080/admin/acceptSupplierRequest",{},{
                    query: {
                        method: 'POST',
                        cache: false,
                        isArray:false,
                        params:{
                            "idPlayer":id
                        }
                    }
                })
            }
        }

    }
]);
