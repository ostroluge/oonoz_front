/**
 * Created by tostrowski on 05/10/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name oonozApp.controller:LoginCtrl
 * @description
 * # SignUpCtrl
 * Controller of the oonozApp
 */
controllers.controller('SignUpCtrl', ['$scope', '$location', 'SignUpService', 'PlayerModel', 'dialogs',
    function ($scope, $location, SignUpService, PlayerModel, dialogs) {

        $scope.submit = function () {

            var player = new PlayerModel($scope);

            console.log(player);
            SignUpService.signup(player)
                .$promise
                .then(
                    function success(response) {
                        $location.path('/login');
                    },
                    function error() {
                        console.log("Error signup REST service");
                    }
                );
        }

        $scope.passwordsMatch = true;

        $scope.checkPasswords = function () {
           // dialogs.notify('Coucou', '');
            console.log($scope.password);
            console.log($scope.passwordConfirmation);
            if ($scope.password === $scope.passwordConfirmation) {
                $scope.passwordsMatch = false;
            } else {
                $scope.passwordsMatch = true;
            }

        }
    }]);