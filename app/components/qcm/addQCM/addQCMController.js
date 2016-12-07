'use strict';
controllers.controller('AddQCMCtrl', ['$scope','dialogs','AddQCMService','$routeParams','$location',
    function ($scope, dialogs, AddQCMService, $routeParams, $location) {

        $scope.qcm={};
        $scope.subThemesSelected=[];

        AddQCMService.getThemes().query().$promise
            .then(
                function success(response) {
                    //dialogs.notify("Succès changement statut", "Le statut de l'utilisateur a été modifié avec succès");
                    $scope.themes=response;
                },
                function error(response) {
                    /*if (response.status == 409) {
                        dialogs.error("Erreur", "L'utilisateur n'existe pas !")
                    }*/
                }
            );
        
        $scope.getSubThemes=function(idTheme){
            $scope.subThemesSelected=[];
            AddQCMService.getSubThemes(idTheme).query().$promise
                .then(
                    function success(response) {
                        $scope.subThemes=response;
                    },
                    function error(response) {

                    }
                );
        };

        $scope.onSubThemeSelect=function(subTheme){

            /**
             * Check if subtheme is not already selected
             */
            var index = $scope.subThemesSelected.indexOf(subTheme);

            if(index==-1){
                $scope.subThemesSelected.push(subTheme);
            }else{
                dialogs.notify("Existe déjà !", "Le sous thème a déjà été sélectionné !");
            }


        };

    }]);

