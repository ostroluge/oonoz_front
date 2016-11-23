/**
 * Created by Jeremy on 20/11/2016.
 */


controllers.controller('suppliersRequestCtrl', ['$scope', 'suppliersRequestService', 'dialogs', '$location',
    function ($scope, userStatusService, dialogs) {
        $scope.suppliersRequest = [];

        $scope.getSupplierRequest = function () {
            userStatusService.getSupplierRequest().query()
                .$promise
                .then(
                    function success(data) {
                        console.log(data);
                        $scope.suppliersRequest = data;
                    },
                    function error() {
                        console.log("Error userStatusCtrl:getSupplierRequest")
                    }
                );
        }


        $scope.refuse = function (id) {
            var dialog = dialogs.confirm("Refus d'une demande fournisseur", "Etes-vous sûr de refuser la demande" +
                " fournisseur de cet utilisateur ?");
            dialog.result.then(
                function (success) {
                    userStatusService.refuse(id).query()
                        .$promise
                        .then(
                            function success(response) {
                                $scope.getSupplierRequest();
                            },
                            function error() {
                                $scope.authFailed = true;
                            }
                        );
                },
                function (error) {
                }
            );
        };

        $scope.accept = function (id) {
            var dialog = dialogs.confirm("Accepter d'une demande fournisseur", "Etes-vous sûr de vouloir accepter " +
                "la demande fournisseur de cet utilisateur ?");
            dialog.result.then(
                function (success) {
                    userStatusService.accept(id).query()
                        .$promise
                        .then(
                            function success(response) {
                                $scope.getSupplierRequest();
                            },
                            function error() {
                                $scope.authFailed = true;
                            }
                        );
                },
                function (error) {
                }
            );
        };
    }
]);