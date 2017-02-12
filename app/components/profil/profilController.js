/**
 * Created by Jeremy on 12/02/2017.
 */

controllers.controller('profilCtrl', ['$scope', 'profilService', 'dialogs', '$location',
    function ($scope, profilService, dialogs) {
        $scope.player = {} ;

        $scope.getUser = function () {
            profilService.getUser().query()
                .$promise
                .then(
                    function success(data) {
                        console.log(data);
                        $scope.player = data;
                    },
                    function error() {
                        console.log("Error userStatusCtrl:getSupplierRequest")
                    }
                );
        }

    }
]);