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
controllers.controller('SignUpCtrl', ['$scope', '$location', 'SignUpService', 'PlayerModel','SupplierModel','dialogs',
    function ($scope, $location, SignUpService, PlayerModel,SupplierModel, dialogs) {

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
                            if (response.status == 409) {
                                notifyUsernameMailUnavailable();
                            }
                            else {
                                notifyInternalErrorOccurs ();
                            }
                        }
                    );

            }
            else {
                var player = new PlayerModel($scope);

                SignUpService.signUpPlayer().save(player)
                    .$promise
                    .then(
                        function success(response) {
                            notifySucces();
                            $location.path('/login');
                        },
                        function error(response) {
                            if (response.status == 409) {
                                notifyUsernameMailUnavailable();
                            }
                            else {
                                notifyInternalErrorOccurs ();
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


        function notifyInternalErrorOccurs () {
            dialogs.error("Erreur", "Une erreur interne s'est produite !");
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