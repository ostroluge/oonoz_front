/**
 * Created by vincent on 23/10/2016.
 */

controllers.controller('ValidationSignUpCtrl', ['$scope', '$location', 'SignUpService','dialogs','$routeParams',
    function ($scope, $location, SignUpService,dialogs,$routeParams) {

        SignUpService.validationSignUp($routeParams.mail,$routeParams.mailKey).query().$promise
            .then(
                function success(response) {
                    dialogs.notify("Succès validation", "Votre e-mail a été validé avec succès.\n" +
                        "Vous allez être redirigé sur la page de connexion.")
                    $location.path("/login");
                },
                function error(response) {

                }
            );

    }]);
