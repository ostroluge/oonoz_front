/**
 * Created by tostrowski on 29/09/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name oonozApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the oonozApp
 */
//angular.module("LoginCtrl", ['LoginService'])
controllers.controller('LoginCtrl', ['$scope','LoginService','$location',
        function ($scope,LoginService,$location) {
            $scope.user = {};
            $scope.username = "";
            $scope.userPassword = "";

            $scope.authenticate = function () {
                LoginService.login($scope.username,$scope.userPassword).query()
                    .$promise
                    .then(
                        function success(response) {
                            $location.path('/home');
                            //$rootScope.user=response;
                        },
                        function error() {
                            $scope.infoMessage = null;
                            $scope.errorMessage = "Identification invalide."
                        }
                    );
            }
        }]);