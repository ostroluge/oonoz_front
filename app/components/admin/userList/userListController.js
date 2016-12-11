'use strict';

controllers.controller('UserListCtrl', ['$scope', 'datatable', 'UserListService', 'dialogs', '$filter',
    function ($scope, datatable, UserListService, dialogs, $filter) {

        $scope.wannaBeSupplier = false;
        $scope.professionalState = true;
        $scope.supplierAccountState = false;
        var datatableConfig = {
            "name": "simple_datatable",
            "columns": [
                {
                    "header": "Id",
                    "property": "id",
                    "order": true,
                    "type": "text"
                },
                {
                    "header": "Login",
                    "property": "login",
                    "order": true,
                    "type": "text"
                },
                {
                    "header": "Nom",
                    "property": "lastname",
                    "order": true,
                    "type": "text"
                },
                {
                    "header": "Prénom",
                    "property": "firstname",
                    "order": true,
                    "type": "text"
                },
                {
                    "header": "E-mail",
                    "property": "email",
                    "order": true,
                    "type": "text"
                },
                {
                    "header": "Date de naissance",
                    "property": "birthdate",
                    "order": true,
                    "type": "text",
                    "format": "date"
                },
                {
                    "header": "Actif",
                    "property": "active",
                    "order": false,
                    "type": "text"
                },
                {
                    "header": "Fournisseur",
                    "property": "supplier",
                    "order": false,
                    "type": "text"
                }/*,
                 {
                 "header":"Professionel",
                 "property":"professionalState",
                 "order":false,
                 "type":"text"
                 }*/
            ],
            /*"edit":{
             "active":true,
             "columnMode":true
             },*/
            "pagination": {
                "active": false,
                "mode": 'local',
                "numberPageListMax": 4,
                "numberRecordsPerPage": 3
            },
            "order": {
                "mode": 'local'
            },
            "showTotalNumberRecords": false,
            "remove": {
                "active": false,
                "mode": 'local'
            },
            "select": {
                "active": false
            },
            "mouseevents": {
                "active": true,//Active or not
                //"overCallback": function(line, data){}, // Callback called when the mouse enter over a row.
                // "leaveCallback":function(line, data){}, // Callback called when the mouse leave a row.
                "clickCallback": function (line, data) {
                    $scope.idModification = data.id;
                    $scope.firstnameModification = data.firstname;
                    $scope.lastnameModification = data.lastname;
                    $scope.usernameModification = data.login;
                    $scope.mailModification = data.email;
                    $scope.birthDateModification = new Date(data.birthdate + 'T00:00:00');
                    //$scope.userType = data.supplier;
                    $scope.wannaBeSupplier=data.supplier;
                    $scope.accountState = data.active;
                    if (data.supplier == true) {

                        $scope.supplierAccountState = data.supplierAccountState;
                        $scope.professionalState = data.professionalState;
                        $scope.companyNameModification = data.companyName;
                        $scope.companyAddressModification = data.companyAddress;
                        $scope.siretNumberModification = data.siretNumber;
                    }
                    else {
                        $scope.professionalState = true;
                    }


                } //The action to execute when a user select a row. Check line.selected to know whether the user selected or unselected a row.
            }
        };

        var datatableData = [];
        $scope.datatable = datatable(datatableConfig);
        $scope.datatable.setData(datatableData);


        var filteredSearch = function (criteria) {

            UserListService.filteredSearch().query(criteria).$promise
                .then(
                    function success(response) {
                        var datatableData = [];
                        for (var user in response.content) {
                            datatableData.push({
                                "id": response.content[user].idPlayer,
                                "login": response.content[user].username,
                                "lastname": response.content[user].lastName,
                                "firstname": response.content[user].firstName,
                                "email": response.content[user].mail,
                                "birthdate": response.content[user].birthDate,
                                "active": response.content[user].isActive,
                                "supplier": response.content[user].isSupplier,
                                "professionalState": response.content[user].isPrivateIndividual,
                                "companyName": response.content[user].companyName,
                                "supplierAccountState": response.content[user].isValid,
                                "companyAddress": response.content[user].companyAddress,
                                "siretNumber": response.content[user].siretNumber
                            });
                        }
                        
                        if (response.totalPages != 1) {
                            $scope.range = new Array(response.totalPages);
                        }
                        else {
                            $scope.range = 0;
                        }
                        $scope.datatable.setData(datatableData);
                    }
                    , function error(response) {
                        if (response.status == -1) {
                            dialogs.error("Erreur", "L'application n'est pas disponible.")
                        }
                    }
                );
        };
        $scope.displayPage = function (pageNumber) {
            var criteria = {};
            criteria.usernameSearch = $scope.username;
            criteria.lastnameSearch = $scope.lastname;
            criteria.firstnameSearch = $scope.firstname;
            criteria.pageNumber = pageNumber;
            criteria.pageSize = $scope.pageSize;
            criteria.mailSearch = $scope.mail;
            criteria.userActive = $scope.userActiveCbox;
            criteria.userInactive = $scope.userInactiveCbox;
            criteria.playerStatus = $scope.playerStatusCbox;
            criteria.supplierStatus = $scope.supplierStatusCbox;
            filteredSearch(criteria);
        };

        /**
         * Search users with criteria
         */
        $scope.search = function () {
            var criteria = {};
            criteria.usernameSearch = $scope.username;
            criteria.lastnameSearch = $scope.lastname;
            criteria.firstnameSearch = $scope.firstname;
            criteria.pageSize = $scope.pageSize;
            criteria.mailSearch = $scope.mail;
            criteria.userActive = $scope.userActiveCbox;
            criteria.userInactive = $scope.userInactiveCbox;
            criteria.playerStatus = $scope.playerStatusCbox;
            criteria.supplierStatus = $scope.supplierStatusCbox;
            filteredSearch(criteria);
        };

        $scope.search_ = function (pageSize) {
            var criteria = {};
            criteria.usernameSearch = $scope.username;
            criteria.lastnameSearch = $scope.lastname;
            criteria.firstnameSearch = $scope.firstname;
            criteria.pageSize = pageSize;
            criteria.mailSearch = $scope.mail;
            criteria.userActive = $scope.userActiveCbox;
            criteria.userInactive = $scope.userInactiveCbox;
            criteria.playerStatus = $scope.playerStatusCbox;
            criteria.supplierStatus = $scope.supplierStatusCbox;
            filteredSearch(criteria);
        };

        /**
         * Clear filter form
         */
        $scope.erase = function () {
            $scope.username = null;
            $scope.lastname = null;
            $scope.firstname = null;
            $scope.mail = null;
            $scope.userActiveCbox = false;
            $scope.userInactiveCbox = false;
            $scope.playerStatusCbox = false;
            $scope.supplierStatusCbox = false;
        };

        /**
         * Clear form
         */
        var clearForm = function () {
            $scope.idModification = "";
            $scope.firstnameModification = "";
            $scope.lastnameModification = "";
            $scope.usernameModification = "";
            $scope.mailModification = "";
            $scope.birthDateModification = "";
            //$scope.userType = "";
            $scope.accountState = "";
            $scope.companyNameModification = "";
            $scope.companyAddressModification = "";
            $scope.siretNumberModification = "";

        };

        $scope.changeStatus = function () {

            UserListService.changeStatusUser($scope.idModification).query().$promise
                .then(
                    function success(response) {
                        dialogs.notify("Succès changement statut", "Le statut de l'utilisateur a été modifié avec succès");
                        $scope.search();
                    },
                    function error(response) {
                        if (response.status == 409) {
                            dialogs.error("Erreur", "L'utilisateur n'existe pas !")
                        }
                    }
                )

        };

        /**
         * Delete a user
         */
        $scope.delete = function () {
            var dlg = dialogs.confirm("Supprimer un utilisateur", "Voulez-vous vraiment supprimer cet utilisateur ?", "");
            dlg.result.then(function () {
                var idPlayer = $scope.idModification;
                UserListService.deleteUser(idPlayer).query().$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès suppression", "L'utilisateur a été supprimé avec succès");
                            $scope.search();
                            clearForm();
                        },
                        function error(response) {
                            if (response.status == 409) {
                                dialogs.error("Erreur", "L'utilisateur n'existe pas !")
                            }
                            else {
                                dialogs.error("Erreur", "Une erreur interne s'est produite !")
                            }
                        }
                    )
                ;
            }, function () {

            });
        };

        var controlForm = function () {

        };

        $scope.update = function () {

            var user = {};
            user.idPlayer = $scope.idModification;
            user.firstName = $scope.firstnameModification;
            user.lastName = $scope.lastnameModification;
            user.username = $scope.usernameModification;
            user.mail = $scope.mailModification;
            user.birthDate = $scope.birthDateModification;
            user.isActive = $scope.accountState;
            user.isSupplier = $scope.wannaBeSupplier;

            if (user.isSupplier == true) {
                user.isPrivateIndividual = $scope.professionalState;
                user.isValid = $scope.supplierAccountState;
                if (user.isPrivateIndividual == false) {
                    user.companyName = $scope.companyNameModification;
                    user.companyAddress = $scope.companyAddressModification;
                    user.siretNumber = $scope.siretNumberModification;
                }
                UserListService.updateSupplier().query(user).$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès modification", "Les informations de l'utilisateur ont été modifiées avec succès");
                            $scope.search();
                        },
                        function error() {

                        }
                    );
            }
            else {
                UserListService.updatePlayer().query(user).$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès modification", "Les informations de l'utilisateur ont été modifiées avec succès");
                            $scope.search();
                        },
                        function error() {

                        }
                    );
            }
        }
    }]);
