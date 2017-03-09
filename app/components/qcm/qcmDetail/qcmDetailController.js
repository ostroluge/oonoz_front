'use strict';

controllers.controller('QcmDetailCtrl', ['$scope', 'dialogs', 'QcmDetailService', '$routeParams', '$location',
    function ($scope, dialogs, QcmDetailService, $routeParams, $location) {

        $scope.qcm = {};

        QcmDetailService.getQcm($routeParams.id).query().$promise
            .then(
                function success(response) {
                    $scope.qcm = response;
                },
                function error(response) {

                }
            );

        $scope.deleteQCM = function () {
            var dlg = dialogs.confirm("Supprimer un QCM", "Voulez-vous vraiment supprimer ce QCM ?", "");
            dlg.result.then(function () {
                QcmDetailService.deleteQCM($routeParams.id).query().$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès", "Le QCM a été supprimé avec succès");
                            $location.path("/home");
                        },
                        function error(response) {

                        }
                    );
            }, function () {

            });
        };

        $scope.updateQCM = function () {
            $location.path("/qcms/" + $scope.qcm.id + "/edit");
        };

        $scope.getWinners = function () {
            QcmDetailService.getWinners($routeParams.id).query().$promise
                .then(
                    function success(response) {
                        var JSONWinners = JSON.stringify(response);
                        var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSONWinners);

                        var a = document.getElementById('linkWinners');
                        a.href = uri;
                        a.innerHTML = "Clic droit et 'Enregistrer le lien sous...'";
                        a.style.color = "#287F50";
                        a.style.textDecoration = "underline";
                    },
                    function error () {
                        console.log('Error getWinners');
                    }
                );
        }
    }]);
