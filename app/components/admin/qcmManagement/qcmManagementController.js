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

        $scope.validateQCM = function(idQCM) {
            QcmManagementService.validateQCM(idQCM).query()
                .$promise
                .then(
                  function success() {
                      dialogs.notify("Succès validation", "Le QCM a été validé");
                      $scope.getAllQcm();
                  },
                    function error() {
                      console.log("Error QcmManagementCtrl:validateQcm")
                    }
                );
        };

        $scope.deleteQCM = function(idQCM) {
          QcmManagementService.deleteQCM(idQCM).query()
              .$promise
              .then(
                function success() {
                    dialogs.notify("Succès suppression", "Le QCM a été supprimé");
                    $scope.getAllQcm();
                },
                  function error() {
                    console.log("Error QcmManagementCtrl:deleteQcm")
                  }
              );
        };
    }
]);