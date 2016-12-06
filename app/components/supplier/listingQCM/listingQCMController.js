/**
 * Created by Jeremy on 05/12/2016.
 */

controllers.controller('listingQCMCtrl', ['$scope', 'listingQCMService', 'dialogs', '$location',
    function ($scope, userStatusService, dialogs) {
        $scope.supplierQCM = [];

        $scope.getSupplierQCM = function () {
            userStatusService.getSupplierQCM().query()
                .$promise
                .then(
                    function success(data) {
                        console.log(data);
                        $scope.supplierQCM = data;
                    },
                    function error() {
                        console.log("Error userStatusCtrl:getSupplierRequest")
                    }
                );
        }

    }
]);