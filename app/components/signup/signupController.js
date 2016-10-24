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
                            notifySucces();
                            $location.path('/login');
                        },
                        function error(response) {
                            console.log("Error signup REST service");
                            if (response.status == 409) {
                                notifyUsernameMailUnavailable();
                            }
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
                            notifySucces();
                            $location.path('/login');
                        },
                        function error(response) {
                            console.log("Error signup REST service");
                            if (response.status == 409) {
                                notifyUsernameMailUnavailable();
                            }
                        }
                    );
            }
        }

        function notifySucces () {
            dialogs.notify("Succès Inscription", "Vous allez recevoir un e-mail de confirmation" +
                " d'inscription afin d'activer votre compte.")
        }

        function notifyUsernameMailUnavailable () {
            dialogs.error("Erreur", "Le username/adresse mail n'est pas disponible !")
        }

        $scope.kindTerm = 'player';

        $scope.updateStatus = function () {
            if ($scope.wannaBeSupplier) {
                $scope.kindTerm = 'supplier';
            } else {
                $scope.kindTerm = 'player';
            }
        };

        $scope.passwordsMatch = false;

        $scope.checkPasswords = function () {
            if ($scope.password === $scope.passwordConfirmation) {
                $scope.passwordsMatch = false;
            } else {
                $scope.passwordsMatch = true;
            }

        }
    }]);