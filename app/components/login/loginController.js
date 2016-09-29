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
angular.module("LoginCtrl", [])
    .controller('LoginCtrl', ['$scope',
        function ($scope) {
            $scope.user = {};
            $scope.userMail = "";
            $scope.userPassword = "";

            $scope.authenticate = function () {
                $scope.mMail = $scope.userMail;
                $scope.mPassword = $scope.userPassword;
            }
        }]);