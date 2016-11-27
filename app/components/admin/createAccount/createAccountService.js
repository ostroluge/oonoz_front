/**
 * Created by Jeremy on 23/11/2016.
 */

services.factory('createAccountService', ['$resource','$location',
    function($resource){
        return {
            createPlayerAccount: function () {
                return $resource("http://localhost:8080/admin/createPlayerAccount", {}, {
                    save: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            },
            createSupplierAccount: function () {
                return $resource("http://localhost:8080/admin/createSupplierAccount",{}, {
                    save: {
                        method: 'POST',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }}]);

