'use strict';
controllers.controller('EditQCMCtrl', ['$scope', 'dialogs', 'EditQCMService', 'AddQCMService', '$routeParams', '$location',
    function ($scope, dialogs, EditQCMService, AddQCMService, $routeParams, $location) {

        $scope.qcm = {};
        $scope.subThemesSelected = [];

        $scope.categories = [{label: 'Se tester'}, {label: 'Apprendre'}];

        AddQCMService.getThemes().query().$promise
            .then(
                function success(response) {
                    //dialogs.notify("Succès changement statut", "Le statut de l'utilisateur a été modifié avec succès");
                    $scope.themes = response;
                },
                function error(response) {
                    /*if (response.status == 409) {
                     dialogs.error("Erreur", "L'utilisateur n'existe pas !")
                     }*/
                }
            );

        AddQCMService.getSuppliers().query().$promise
            .then(
                function success(response) {
                    $scope.suppliers = response;
                },
                function error(response) {

                }
            );

        $scope.getSubThemes = function (idTheme) {
            $scope.subThemesSelected = [];
            AddQCMService.getSubThemes(idTheme).query().$promise
                .then(
                    function success(response) {
                        $scope.subThemes = response;
                    },
                    function error(response) {

                    }
                );
        };

        $scope.onSubThemeSelect = function (subTheme) {

            /**
             * Check if subtheme is not already selected
             */
            var index = $scope.subThemesSelected.indexOf(subTheme);

            if (index == -1) {
                $scope.subThemesSelected.push(subTheme);
            } else {
                dialogs.notify("Existe déjà !", "Le sous thème a déjà été sélectionné !");
            }
        };

        EditQCMService.getQCM($routeParams.id).query().$promise
            .then(
                function success(response) {
                    $scope.qcm=response;

                    /**Set the default supplier of QCM in list*/
                    $scope.suppliers.forEach(function(supplier){
                        if(supplier.idPlayer==$scope.qcm.idSupplier){
                            $scope.supplier=supplier;
                        }
                    });

                },
                function error(response) {

                }
            );

    }]);