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

                        $scope.subThemes.forEach(function (subTheme) {
                            $scope.qcm.subThemes.forEach(function (value) {
                                if (subTheme.id === value.id) {
                                    $scope.onSubThemeSelect(subTheme);
                                }
                            });
                        });
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

        $scope.deleteSubTheme=function(index){
            console.log(index);
            $scope.subThemesSelected.splice(index,1);
        };

        EditQCMService.getQCM($routeParams.id).query().$promise
            .then(
                function success(response) {
                    $scope.qcm = response;

                    /**Set the default supplier of QCM in list*/
                    $scope.suppliers.forEach(function (supplier) {
                        if (supplier.idPlayer == $scope.qcm.idSupplier) {
                            $scope.supplier = supplier;
                        }
                    });

                    $scope.themes.forEach(function (theme) {
                        if (theme.idTheme === $scope.qcm.idTheme) {
                            $scope.theme = theme;
                            $scope.getSubThemes(theme.idTheme);
                        }
                    });

                    if ($scope.qcm.category === 'sommatif') {
                        $scope.categories.forEach(function (category) {
                           if (category.label === 'Se tester') {
                               $scope.category = category;
                           }
                        });
                    } else if ($scope.qcm.category === 'formatif') {
                        $scope.categories.forEach(function (category) {
                           if (category.label === 'Apprendre') {
                               $scope.category = category;
                           }
                        });
                    }

                },
                function error(response) {

                }
            );

        $scope.editQCM = function () {
            var qcm = {};

            qcm.id = $routeParams.id;
            qcm.name = $scope.qcm.name;
            qcm.description = $scope.qcm.description;
            qcm.idTheme = $scope.theme.idTheme;
            qcm.idSupplier = $scope.supplier.idPlayer;
            qcm.free = $scope.qcm.free;
            if (!$scope.qcm.free) {
                qcm.price = $scope.qcm.price;
            }
            qcm.category = $scope.getCategory($scope.category.label);
            qcm.minimalScore = $scope.qcm.minimalScore;

            if ($scope.qcm.icon != null) {
                if ($scope.qcm.icon.base64 != null) {
                    qcm.icon = $scope.qcm.icon.base64;
                }
            }

            qcm.prizeName = $scope.qcm.prizeName;
            qcm.prizeDescription = $scope.qcm.prizeDescription;

            EditQCMService.editQCM(qcm.id).query(qcm)
                .$promise
                .then(
                    function success (response) {
                        dialogs.confirm("Succès", "La modification s'est déroulée avec succès !");
                        $location.path('/qcms/'+qcm.id+'/edit');
                    },
                    function error (response) {
                        dialogs.error("Erreur", "Erreur lors de l'édition, veuillez réessayer ultérieurement.");
                    }
                );
        };

        $scope.getCategory = function (label) {
            if (label === 'Apprendre') {
                return 'formatif';
            } else {
                return 'sommatif';
            }
        };
    }]);