controllers.controller('PresentationQcmCtrl', ['$scope', 'PresentationQcmService', '$routeParams',
    function ($scope, PresentationQcmService, $routeParams) {

        $scope.qcm = {};

        PresentationQcmService.getQcm($routeParams.id).query().$promise
            .then(
                function success(response) {
                    $scope.qcm = response;
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
