/**
 * Created by tostrowski on 20/11/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name oonozApp.controller:AddThemeCtrl
 * @description
 * # AddThemeCtrl
 * Controller of the oonozApp
 */
controllers.controller('AddThemeCtrl', ['$scope','AddThemeService','$location',
    function($scope, AddThemeService, $location) {
        $scope.postTheme = function () {
            var theme = {};
            theme.label = $scope.label;
            theme.description = $scope.description;
            theme.validated = false;

            AddThemeService.postTheme().query(theme)
                .$promise
                .then(
                    function success(data) {
                        $location.path("/themes")
                    },
                    function error() {
                        console.log("Error AddThemeCtrl:postTheme")
                    }
                );
        }
    }
]);