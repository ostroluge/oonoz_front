'use strict';

controllers.controller('QcmDetailCtrl', ['$scope','dialogs','QcmDetailService','$routeParams',
    function ($scope, dialogs,QcmDetailService,$routeParams) {

        $scope.qcm={};

        QcmDetailService.getQcm($routeParams.id).query().$promise
            .then(
                function success(response) {

                    $scope.qcm=response;
                    
                    console.log(response);
                },
                function error(response) {

                }
            );
    }]);
