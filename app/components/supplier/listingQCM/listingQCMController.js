/**
 * Created by Jeremy on 05/12/2016.
 */

controllers.controller('listingQCMCtrl', ['$scope', 'listingQCMService', 'dialogs', '$location',
    function ($scope, listingQCMService, dialogs) {
        $scope.supplierQCM = [];
        $scope.theme;
        $scope.subTheme;

        $scope.getSupplierQCM = function () {
            listingQCMService.getSupplierQCM().query()
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
        };

        $scope.erase = function () {
            $scope.theme = null;
            $scope.subTheme = null;
        };

        $scope.filteredSearch = function (theme,subTheme) {
            console.log("ctrl : "+theme+subTheme);
            listingQCMService.filteredSearch(theme,subTheme).query()
                .$promise
                .then(
                    function success(data) {
                        console.log(data);
                        $scope.supplierQCM = data;
                    },
                    function error() {
                        console.log("Error listingQCMCtrl:search")
                    }
                );
        }


    }
]);