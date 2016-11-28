/**
 * Created by tostrowski on 20/11/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name oonozApp.controller:AddSubThemeCtrl
 * @description
 * # AddSubThemeCtrl
 * Controller of the oonozApp
 */
controllers.controller('AddSubThemeCtrl', ['$scope','AddSubThemeService','$location', '$routeParams',
    function($scope, AddSubThemeService, $location, $routeParams) {
        $scope.postSubTheme = function () {
            var subtheme = {};
            subtheme.label = $scope.label;
            subtheme.description = $scope.description;
            subtheme.idTheme = $routeParams.id;
            subtheme.validated = false;

            if ($scope.subThemeImage != null) {
                if ($scope.subThemeImage.base64 != null) {
                    subtheme.iconUrl = $scope.subThemeImage.base64;
                }
            }

            AddSubThemeService.postSubTheme(subtheme.idTheme).query(subtheme)
                .$promise
                .then(
                    function success(data) {
                        $location.path("/themes")
                    },
                    function error() {
                        console.log("Error AddSubThemeCtrl:postSubTheme")
                    }
                );
        }
    }
]);