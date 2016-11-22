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
controllers.controller('ThemeListCtrl', ['$scope', 'ThemeListService', 'dialogs',
    function ($scope, ThemeListService, dialogs) {
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
        };

        $scope.deleteTheme = function (idTheme) {
            var dialog = dialogs.confirm("Suppression de thème", "Êtes-vous sûr de vouloir supprimer ce thème ?");
            dialog.result.then(
                function (success) {
                    ThemeListService.deleteTheme(idTheme).query()
                        .$promise
                        .then(
                            function success(data) {
                                $scope.getThemes();
                            },
                            function error() {
                                console.log("Error themeListCtrl:deleteTheme")
                            }
                        );
                },
                function (error) {

                }
            );
        };

        $scope.deleteSubTheme = function (idTheme, idSubTheme) {
            var dialog = dialogs.confirm("Suppression de sous-thème", "Êtes-vous sûr de vouloir supprimer ce sous-thème ?");
            dialog.result.then(
                function (success) {
                    ThemeListService.deleteSubTheme(idTheme, idSubTheme).query()
                        .$promise
                        .then(
                            function success(data) {
                                $scope.getThemes();
                            },
                            function error() {
                                console.log("Error themeListCtrl:deleteSubTheme")
                            }
                        );
                },
                function (error) {

                }
            );
        };
    }
]);