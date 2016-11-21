/**
 * Created by tostrowski on 24/10/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name oonozApp.controller:TermCtrl
 * @description
 * # TermCtrl
 * Controller of the oonozApp
 */
controllers.controller('TermCtrl', ['$scope', 'TermService', '$routeParams',
    function ($scope, TermService, $routeParams) {

        $scope.terms = function () {
            TermService.terms($routeParams.type).query()
                .$promise
                .then(
                    function success(response) {
                        $scope.termsOfService = response.response;
                    },
                    function error() {

                    }
                );
        }
    }
]);