controllers.controller('PresentationQcmCtrl', ['$scope','PresentationQcmService','$routeParams',
    function ($scope,PresentationQcmService,$routeParams) {

        $scope.qcm={};

        PresentationQcmService.getQcm($routeParams.id).query().$promise
            .then(
                function success(response) {
                    $scope.qcm=response;
                },
                function error(response) {

                }
            );
    }]);
