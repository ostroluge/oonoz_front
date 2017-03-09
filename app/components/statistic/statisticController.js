/**
 * Created by hakyo on 09/03/2017.
 */
controllers.controller('statCtrl', ['$scope', 'statService', 'dialogs', '$location',
    function ($scope, statService, dialogs) {


        $scope.getStat = function () {
            statService.getStat().query()
                .$promise
                .then(
                    function success(data) {
                        console.log(data);
                        $scope.total = data[0];
                        $scope.gagne = data[1];
                        $scope.moyenne = data[2];
                        $scope.commentNumber = data[3];
                        console.log($scope.total);

                    },
                    function error() {
                        console.log("Error userStatusCtrl:getSupplierRequest")
                    }
                );
        };

    }
]);