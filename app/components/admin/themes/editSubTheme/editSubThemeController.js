/**
 * Created by tostrowski on 21/11/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name oonozApp.controller:EditSubThemeCtrl
 * @description
 * # EditSubThemeCtrl
 * Controller of the oonozApp
 */
controllers.controller('EditSubThemeCtrl', ['$scope', 'EditSubThemeService', '$location', '$routeParams',
    function ($scope, EditSubThemeService, $location, $routeParams) {

        $scope.editSubTheme = function () {
            var subtheme = {};
            subtheme.label = $scope.label;
            subtheme.description = $scope.description;
            subtheme.idTheme = $routeParams.idTheme;
            subtheme.idSubTheme = $routeParams.idSubTheme;
            subtheme.validated = true;

            if ($scope.subThemeImage != null) {
                subtheme.iconUrl = $scope.subThemeImage;
                if ($scope.subThemeImage.base64 != null) {
                    subtheme.iconUrl = $scope.subThemeImage.base64;
                }
            }

            EditSubThemeService.editSubTheme(subtheme.idTheme, subtheme.idSubTheme).query(subtheme)
                .$promise
                .then(
                    function success(data) {
                        $location.path("/themes")
                    },
                    function error(msg) {
                        console.log("Error EditSubThemeCtrl:editSubTheme")
                    }
                );
        };

        $scope.getSubTheme = function () {
            EditSubThemeService.getSubTheme($routeParams.idTheme, $routeParams.idSubTheme).query()
                .$promise
                .then(
                    function success(data) {
                        $scope.label = data.label;
                        $scope.description = data.description;
                        $scope.subThemeImage = data.iconUrl;
                        $scope.idTheme = data.idTheme;
                        $scope.idSubTheme = data.id;
                    },
                    function error(msg) {
                        console.log("Error EditSubThemeCtrl:getSubTheme")
                    }
                );
        };
    }
]);