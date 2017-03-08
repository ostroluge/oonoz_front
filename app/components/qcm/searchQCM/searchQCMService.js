'use strict';

services.factory('SearchQCMService', ['$resource',
    function ($resource) {
        return {
        filteredSearch: function(filterObject){
            return $resource("http://5.135.165.108:8092/Oonoz/qcms/filteredSearch",{},{
                query: {
                    method: 'POST',
                    cache: false,
                    isArray:true
                }
            });
        }};
    }]);