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

            if ($scope.wannaBeSupplier == true) {
                var supplier = new SupplierModel($scope);
                if ($scope.typeAccount.toString() == "professional") {
                    supplier.isPrivateIndividual = "false";
                }

                SignUpService.signUpSupplier().save(supplier)
                    .$promise
                    .then(
                        function success(response) {
                            alert("Votre inscription a été enregistré ! Vous allez recevoir un e-mail pour la valider.");
                            $location.path('/login');
                        },
                        function error() {
                            console.log("Error signup REST service");
                        }
                    );

            }
            else {
                var player = new PlayerModel($scope);
                console.log(player);

                SignUpService.signUpPlayer().save(player)
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