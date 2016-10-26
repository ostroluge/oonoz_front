/**
 * Created by Jeremy on 12/10/2016.
 */


/**
 * @ngdoc function
 * @name oonozApp.controller:LoginCtrl
 * @description
 * # SignUpCtrl
 * Controller of the oonozApp
 */
controllers.controller('generatePasswordCtrl', ['$scope','$location','generatePasswordService','PlayerModel','dialogs',
    function ($scope, $location,generatePasswordService,PlayerModel,dialogs) {

        $scope.submit=function () {
            var mail={"mail":$scope.mail};
            generatePasswordService.generate(mail)
                .$promise
                .then(
                    function success(response) {
                        dialogs.notify("Succès", "Vous allez recevoir un e-mail avec votre nouveau mot de passe.");
                        $location.path('/login');
                    },
                    function error() {
                        notifyInternalErrorOccurs();
                    }
                );
        }

        function notifyInternalErrorOccurs () {
            dialogs.error("Erreur", "Une erreur interne s'est produite !");
        }

    }]);