/**
 * Created by tostrowski on 20/11/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name oonozApp.controller:ThemeListCtrl
 * @description
 * # ThemeListCtrl
 * Controller of the oonozApp
 */
controllers.controller('ThemeListCtrl', ['$scope', 'ThemeListService', '$location',
    function($scope, ThemeListService) {
        $scope.themes = [];

        $scope.getThemes = function () {
            ThemeListService.getAllThemes().query()
                .$promise
                .then(
                    function success(data) {
                        $scope.themes = data;
                    },
                    function error() {
                        console.log("Error themeListCtrl:getAllThemes")
                    }
                );
        }
    }
]);