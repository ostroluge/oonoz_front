/**
 * Created by Jeremy on 05/12/2016.
 */
services.factory('listingQCMService', ['$resource', '$location',
    function ($resource) {
        return {
            getSupplierQCM: function () {
                return $resource("http://5.135.165.108:8092/Oonoz/user/getSupplierQCM", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },
            filteredSearch: function(mTheme,mSubTheme){
                // return $resource("http://localhost:8080/admin/acceptSupplierRequest",{},{
                return $resource("http://5.135.165.108:8092/Oonoz/searchSupplierQCM",{},{
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray:true,
                        params:{
                            theme: mTheme,
                            subTheme : mSubTheme
                        }
                    }
                })
            }

        }
}]);