/**
 * Created by tostrowski on 20/11/2016.
 */
services.factory('ThemeListService', ['$resource', '$location',
    function ($resource) {
        return {
            getAllThemes: function () {
               // return $resource("http://localhost:8080/themes", {}, {
                    return $resource("http://5.135.165.108:8092/Oonoz/themes", {}, {
                    query: {
                        method: 'GET',
                        cache: false,
                        isArray: true
                    }
                });
            },
            deleteTheme: function (id) {
               // return $resource("http://localhost:8080/themes/" + id, {}, {
                    return $resource("http://5.135.165.108:8092/Oonoz/themes/" + id, {}, {
                    query: {
                        method: 'DELETE',
                        cache: false,
                        isArray: false
                    }
                });
            },

            deleteSubTheme: function (idTheme, idSubTheme) {
//                return $resource("http://localhost:8080/themes/" + idTheme + "/subthemes/" + idSubTheme, {}, {
                    return $resource("http://5.135.165.108:8092/Oonoz/themes/" + idTheme + "/subthemes/" + idSubTheme, {}, {
                    query: {
                        method: 'DELETE',
                        cache: false,
                        isArray: false
                    }
                });
            },

            validateTheme: function (idTheme) {
          //      return $resource("http://localhost:8080/themes/" + idTheme + "/validation", {}, {
                    return $resource("http://5.135.165.108:8092/Oonoz/" + idTheme + "/validation", {}, {
                        query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            },

            validateSubTheme: function (idTheme, idSubTheme) {
      //          return $resource("http://localhost:8080/themes/"+idTheme+"/subthemes/"+idSubTheme+"/validation", {}, {
                    return $resource("http://5.135.165.108:8092/Oonoz/"+idTheme+"/subthemes/"+idSubTheme+"/validation", {}, {
                        query: {
                        method: 'PUT',
                        cache: false,
                        isArray: false
                    }
                });
            }
        }
    }]);