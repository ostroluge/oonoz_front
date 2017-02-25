/**
 * Created by Jeremy on 12/02/2017.
 */

controllers.controller('profilCtrl', ['$scope', 'profilService', 'dialogs', '$location',
    function ($scope, profilService, dialogs) {

        $scope.player = {} ;
        $scope.wannaBeSupplier = false;
        $scope.professionalState = false;
        $scope.isPrivateIndividual = true;

        $scope.getUser = function () {
            profilService.getUser().query()
                .$promise
                .then(
                    function success(data) {
                        console.log(data);
                        $scope.player = data;
                        $scope.username = data.username;
                        $scope.lastname = data.lastName;
                        $scope.firstname = data.firstName;
                        $scope.birthDate = new Date(data.birthdate+'T00:00:00');
                        $scope.isSupplier = data.isSupplier;
                        $scope.mail = data.mail;
                        $scope.companyName = data.companyName;
                        $scope.companyAddress = data.companyAddress;
                        $scope.siretNumber = data.siretNumber;
                        $scope.credit = data.credit;
                        if (data.isPrivateIndividual != null){
                            $scope.isPrivateIndividual = data.isPrivateIndividual;
                        }


                    },
                    function error() {
                        console.log("Error userStatusCtrl:getSupplierRequest")
                    }
                );
        };

        $scope.update = function () {

                var user = {};
                user.idPlayer = $scope.player.idPlayer;
                user.firstName = $scope.firstname;
                user.lastName = $scope.lastname;
                user.username = $scope.player.username;
                user.mail = $scope.mail;
                user.birthDate = $scope.birthDate;
                user.isActive = $scope.player.isActive;
                user.isSupplier = $scope.player.isSupplier;
                user.password = $scope.password;
                user.credit = $scope.credit;


               /* if ($scope.professionalState){
                    user.isPrivateIndividual= $scope.professionalState;
                }*/

                if (user.isSupplier == true) {
                    user.isPrivateIndividual = !($scope.professionalState);
                    console.log($scope.professionalState);
                    user.isValid = $scope.player.isValid;
                    if (user.isPrivateIndividual == false) {
                        user.companyName = $scope.companyName;
                        console.log(user.companyName);
                        user.companyAddress = $scope.companyAddress;
                        user.siretNumber = $scope.siretNumber;
                    }
                    profilService.updateSupplier().query(user).$promise
                        .then(
                            function success(response) {
                                dialogs.notify("Succès modification", "Les informations de l'utilisateur ont été modifiées avec succès");
                            },
                            function error() {

                            }
                        );
                }else{
                    profilService.updatePlayer().query(user).$promise
                        .then(
                            function success(response) {
                                dialogs.notify("Succès modification", "Les informations de l'utilisateur ont été modifiées avec succès");
                                $scope.getUser();
                            },
                            function error() {

                            }
                        );
                }


                };


        $scope.checkPasswords = function () {
            if ($scope.password === $scope.passwordConfirmation) {
                $scope.passwordsMatch = false;
            } else {
                $scope.passwordsMatch = true;
            }

        };

        $scope.requestSupplierStatus = function () {
            profilService.requestSupplierStatus($scope.player.idPlayer).query().$promise
                .then(
                    function success(response) {
                        dialogs.notify("Succès de la demande de changement statut", "Votre demande de changement de statut a été soumise avec succès");
                    },
                    function error(response) {
                        if (response.status == 409) {
                            dialogs.error("Erreur", "L'utilisateur n'existe pas !")
                        }
                    }
                )

        };


    }
]);