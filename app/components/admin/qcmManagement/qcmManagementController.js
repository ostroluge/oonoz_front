/**
 * Created by vincent on 05/12/2016.
 */
controllers.controller('qcmManagementCtrl', ['$scope', 'QcmManagementService', 'dialogs', '$location',
    function ($scope, QcmManagementService, dialogs) {

        $scope.getAllQcm = function () {
            QcmManagementService.getValidatedQCM().query()
                .$promise
                .then(
                    function success(data) {
                        $scope.validatedQcm = data;
                    },
                    function error() {
                        console.log("Error QcmManagementCtrl:getValidatedQcm")
                    }
                );

            QcmManagementService.getNotValidatedQCM().query()
                .$promise
                .then(
                    function success(data) {
                        $scope.notValidatedQcm = data;
                    },
                    function error() {
                        console.log("Error QcmManagementCtrl:getNotValidatedQcm")
                    }
                );
        };
    }
]);