controllers.controller('PresentationQcmCtrl', ['$scope', 'PresentationQcmService', '$routeParams','usSpinnerService',
    function ($scope, PresentationQcmService, $routeParams,usSpinnerService) {
        usSpinnerService.spin('spinner-1');
        $scope.qcm = {};
        $scope.buttonShow=true;
        PresentationQcmService.getQcm($routeParams.id).query().$promise
            .then(
                function success(response) {
                    $scope.qcm = response;
                    usSpinnerService.stop('spinner-1');
                    $scope.buttonShow=false;
                },
                function error(response) {

                }
            );

        PresentationQcmService.getFeedback($routeParams.id).query().$promise
            .then(
                function success(response) {
                    $scope.comments = response.comments;
                    $scope.averageRating = response.averageRating;
                    $scope.totalComments = response.totalComments;
                    $scope.totalRatings = response.totalRatings;
                },
                function error() {
                    console.log('Error getFeedback')
                }
            )
    }]);
