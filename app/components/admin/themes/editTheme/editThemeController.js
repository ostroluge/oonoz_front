/**
 * Created by tostrowski on 21/11/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name oonozApp.controller:EditThemeCtrl
 * @description
 * # EditThemeCtrl
 * Controller of the oonozApp
 */
controllers.controller('EditThemeCtrl', ['$scope', 'EditThemeService', '$location', '$routeParams',
    function ($scope, EditThemeService, $location, $routeParams) {

        $scope.editTheme = function () {
            var theme = {};
            theme.label = $scope.label;
            theme.description = $scope.description;
            theme.idTheme = $routeParams.id;
            theme.validated = false;

            EditThemeService.editTheme(theme.idTheme).query(theme)
                .$promise
                .then(
                    function success(data) {
                        $location.path("/themes")
                    },
                    function error(msg) {
                        console.log("Error EditThemeCtrl:editTheme")
                    }
                );
        };

        $scope.getTheme = function () {
            EditThemeService.getTheme($routeParams.id).query()
                .$promise
                .then(
                    function success(data) {
                        $scope.label = data.label;
                        $scope.description = data.description;
                    },
                    function error(msg) {
                        console.log("Error EditThemeCtrl:getTheme")
                    }
                );
        };
    }
]);