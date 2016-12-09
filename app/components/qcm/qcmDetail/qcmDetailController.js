'use strict';

controllers.controller('QcmDetailCtrl', ['$scope','dialogs','QcmDetailService','$routeParams','$location',
    function ($scope, dialogs,QcmDetailService,$routeParams,$location) {

        $scope.qcm={};

        QcmDetailService.getQcm($routeParams.id).query().$promise
            .then(
                function success(response) {

                    $scope.qcm=response;

                    console.log(response);
                },
                function error(response) {

                }
            );

        $scope.deleteQCM=function(){
            var dlg =dialogs.confirm("Supprimer un QCM", "Voulez-vous vraiment supprimer ce QCM ?", "");
            dlg.result.then(function () {
                QcmDetailService.deleteQCM($routeParams.id).query().$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès", "Le QCM a été supprimé avec succès");
                            $location.path("/home")

                        },
                        function error(response) {

                        }
                    );
            }, function () {

            });
        };

        $scope.updateQCM=function(){

        };
    }]);
