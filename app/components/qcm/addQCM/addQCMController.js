'use strict';
controllers.controller('AddQCMCtrl', ['$scope', 'dialogs', 'AddQCMService', '$routeParams', '$location','Upload','usSpinnerService',
    function ($scope, dialogs, AddQCMService, $routeParams, $location,Upload,usSpinnerService) {

        /* Variables initialisation */
        $scope.qcm = {};
        $scope.subThemesSelected = [];
        $scope.QCMForm={};
        $scope.themes = [];
        $scope.subThemes = [];
        $scope.minimalScore=0;
        $scope.categories = [{label: 'Se tester'}, {label: 'Apprendre'}];
        $scope.icon={};
        var img=null;

        /**
         * Check uploaded file
         * @param $files
         */
        $scope.onFileSelect=function($files){
            if($files.length==1) {
                var file=$files[0];
                if($files[0].size>500000){
                    dialogs.error("Erreur", "Le fichier est trop volumineux ! (Max 500ko)");
                }
                if (file.type.match('image.*')) {
                    var reader = new FileReader();
                    reader.readAsBinaryString(file);
                    usSpinnerService.spin('spinner-1');
                    $scope.icon.filename=file.name;
                    reader.onloadend = function (e) {
                        img=btoa(reader.result);
                        usSpinnerService.stop('spinner-1');
                    };
                }
                else {
                    dialogs.error("Erreur", "Le fichier n'est pas une image !");
                }
            }
        };


        /**
         * Get validated themes to fill select box.
         */
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
         * Add a subtheme to the list.
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

        /**
         * Remove subtheme from selected list.
         * @param index
         */
        $scope.deleteSubTheme=function(index){
            $scope.subThemesSelected.splice(index,1);
        };

        /**
         * Create a QCM with POST request.
         */
        $scope.postQCM = function () {
            
            if($scope.QCMForm.$valid) {
                var qcm = {};
                qcm.name = $scope.name;
                qcm.description = $scope.description;
                qcm.category = $scope.getCategory($scope.category.label);
                qcm.idTheme = $scope.theme.idTheme;
                //qcm.idSupplier = $scope.supplier.idPlayer;
                if ($scope.category.label=='Se tester') {
                    qcm.free = true;
                }
                if ($scope.category.label!='Se tester') {
                    qcm.free = $scope.isFree;
                }
                if (!$scope.isFree) {
                    qcm.price = $scope.price;
                }
                qcm.minimalScore = $scope.minimalScore;

                if (img != null) {
                    qcm.icon = img;
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
                            $location.path('qcms/' + response.id + '/edit');
                        },
                        function error(response) {
                            if(response.status == 405){
                                dialogs.notify("Nom déjà utilisé","Le nom du QCM est déjà utilisé.");
                            }
                            else{
                                dialogs.error("Échec création QCM", "La création a échoué veuillez réessayer ultérieurement.");
                            }
                        }
                    );
            }
        };

        $scope.getCategory = function (label) {
            if (label === 'Apprendre') {
                return 'formatif';
            } else {
                return 'sommatif';
            }
        }

    }]);

