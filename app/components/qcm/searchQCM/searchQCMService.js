'use strict';

services.factory('SearchQCMService', ['$resource',
    function ($resource) {
        return {
        filteredSearch: function(filterObject){
            return $resource("http://localhost:8092/qcms/filteredSearch",{},{
                query: {
                    method: 'POST',
                    cache: false,
                    isArray:true
                }
            });
        }};
    }]);