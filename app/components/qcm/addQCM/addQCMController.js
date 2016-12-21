'use strict';
controllers.controller('AddQCMCtrl', ['$scope', 'dialogs', 'AddQCMService', '$routeParams', '$location',
    function ($scope, dialogs, AddQCMService, $routeParams, $location) {

        $scope.qcm = {};
        $scope.subThemesSelected = [];
        $scope.themes = [];
        $scope.subThemes = [];
        $scope.minimalScore=0;

        $scope.categories = [{label: 'Se tester'}, {label: 'Apprendre'}];

        AddQCMService.getValidatedThemes().query().$promise
            .then(
                function success(response) {
                    $scope.themes=response;
                },
                function error(response) {
                }
            );

        /*AddQCMService.getSuppliers().query().$promise
            .then(
                function success(response) {
                    $scope.suppliers = response;
                },
                function error(response) {

                }
            );*/

        /**
         * Get subthemes from a theme.
         * @param idTheme
         */
        $scope.getSubThemes = function (theme) {
            $scope.subThemesSelected = [];
            $scope.subThemes = [];
            var index=$scope.themes.indexOf(theme);
            $scope.subThemes=$scope.themes[index].subThemes;
        };

        /**
         * Add a subtheme to the list
         * @param subTheme
         */
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

        $scope.postQCM = function () {
            var qcm = {};
            qcm.name = $scope.name;
            qcm.description = $scope.description;
            qcm.idTheme = $scope.theme.idTheme;
            //qcm.idSupplier = $scope.supplier.idPlayer;
            qcm.free = $scope.isFree;
            if (!$scope.isFree) {
                qcm.price = $scope.price;
            }
            qcm.category = $scope.getCategory($scope.category.label);
            qcm.minimalScore = $scope.minimalScore;

            if ($scope.icon != null) {
                if ($scope.icon.base64 != null) {
                    qcm.icon = $scope.icon.base64;
                }
            }

            qcm.prizeName = $scope.prizeName;
            qcm.prizeDescription = $scope.prizeDescription;

            AddQCMService.postQCM().query(qcm)
                .$promise
                .then(
                    function success(response) {
                        dialogs.notify("Création succès", "La création du QCM s'est déroulée avec succès !");
                        $scope.subThemesSelected.forEach(function (value) {
                            AddQCMService.addSubTheme(response.id, value.id).query()
                                .$promise
                                .then(
                                    function success(response) {
                                        console.log('Add SubTheme success');
                                       
                                    },
                                    function error(response) {
                                        console.log('Add SubTheme error');
                                    }
                                );
                        });
                        $location.path('qcms/'+response.id+'/edit');
                    },
                    function error(response) {
                        dialogs.error("Échec création QCM", "La création a échoué veuillez réessayer ultérieurement.");
                    }
                );
        };

        $scope.getCategory = function (label) {
            if (label === 'Apprendre') {
                return 'formatif';
            } else {
                return 'sommatif';
            }
        }

    }]);

