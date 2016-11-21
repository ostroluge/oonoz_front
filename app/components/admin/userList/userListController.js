'use strict';

controllers.controller('UserListCtrl', ['$scope','datatable','UserListService','dialogs','$filter',
    function ($scope,datatable,UserListService,dialogs,$filter) {

        $scope.userType=false;
        $scope.professionalState=true;
        var datatableConfig = {
            "name":"simple_datatable",
            "columns":[
                {
                    "header":"Id",
                    "property":"id",
                    "order":true,
                    "type":"text"
                },
                {
                    "header":"Login",
                    "property":"login",
                    "order":true,
                    "type":"text"
                },
                {
                    "header":"Nom",
                    "property":"lastname",
                    "order":true,
                    "type":"text"
                },
                {
                    "header":"Prénom",
                    "property":"firstname",
                    "order":true,
                    "type":"text"
                },
                {
                    "header":"E-mail",
                    "property":"email",
                    "order":true,
                    "type":"text"
                },
                {
                    "header":"Date de naissance",
                    "property":"birthdate",
                    "order":false,
                    "type":"text",
                    "format" : "date"
                },
                {
                    "header":"Actif",
                    "property":"active",
                    "order":false,
                    "type":"text"
                },
                {
                    "header":"Fournisseur",
                    "property":"supplier",
                    "order":false,
                    "type":"text"
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
            "pagination":{
                "active":false,
                "mode":'local',
                "numberPageListMax":4,
                "numberRecordsPerPage":3
            },
            "order":{
                "mode":'local'
            },
            "showTotalNumberRecords":false,
            "remove":{
                "active":false,
                "mode":'local'
            },
            "select":{
                "active":false
            },
            "mouseevents":{
                "active":true,//Active or not
                //"overCallback": function(line, data){}, // Callback called when the mouse enter over a row.
               // "leaveCallback":function(line, data){}, // Callback called when the mouse leave a row.
                "clickCallback": function(line, data){
                    $scope.idModification=data.id;
                    $scope.firstnameModification=data.firstname;
                    $scope.lastnameModification=data.lastname;
                    $scope.usernameModification=data.login;
                    $scope.mailModification=data.email;
                    $scope.birthDateModification=new Date(data.birthdate+'T00:00:00');
                    $scope.userType=data.supplier;
                    $scope.accountState=data.active;
                    if(data.supplier==true){
                        console.log(data.supplierAccountState);
                        $scope.supplierAccountState=data.supplierAccountState;
                        $scope.professionalState=data.professionalState;
                        $scope.companyNameModification=data.companyName;
                        $scope.companyAddressModification=data.companyAddress;
                        $scope.siretNumberModification=data.siretNumber;
                    }
                    else{
                        $scope.professionalState=true;
                    }


                } //The action to execute when a user select a row. Check line.selected to know whether the user selected or unselected a row.
            }
        };

        var datatableData = [];
        $scope.datatable = datatable(datatableConfig);
        $scope.datatable.setData(datatableData);
        
        var filteredSearch=function(criteria){

            UserListService.filteredSearch().query(criteria).$promise
                .then(
                    function success(response) {
                        var datatableData = [];
                        for(var user in response.content )
                        {
                            datatableData.push({
                                "id": response.content[user].idPlayer,
                                "login": response.content[user].username,
                                "lastname": response.content[user].lastName,
                                "firstname": response.content[user].firstName,
                                "email": response.content[user].mail,
                                "birthdate":response.content[user].birthDate,
                                "active":response.content[user].active,
                                "supplier":response.content[user].supplier,
                                "professionalState":response.content[user].isPrivateIndividual,
                                "companyName":response.content[user].companyName,
                                "supplierAccountState":response.content[user].isValid,
                                "companyAddress":response.content[user].companyAddress,
                                "siretNumber":response.content[user].siretNumber
                            });

                            console.log(response.content[user].isValid);
                        }
                        console.log(response.content);
                        $scope.range = new Array(response.totalPages);
                        $scope.datatable.setData(datatableData);
                    }
                    , function error() {
                    }
                );
        };
        
        
        $scope.displayPage=function(pageNumber){
            var criteria={};
            criteria.usernameSearch=$scope.username;
            criteria.lastnameSearch=$scope.lastname;
            criteria.firstnameSearch=$scope.firstname;
            criteria.pageNumber=pageNumber;
            criteria.pageSize=$scope.pageSize;

            filteredSearch(criteria);
        };


        $scope.search = function () {
            var criteria={};
            criteria.usernameSearch=$scope.username;
            criteria.lastnameSearch=$scope.lastname;
            criteria.firstnameSearch=$scope.firstname;
            criteria.pageSize=$scope.pageSize;
            filteredSearch(criteria);
        }

        $scope.update= function () {
            var user={};
            user.idPlayer=$scope.idModification;
            user.firstName=$scope.firstnameModification;
            user.lastName=$scope.lastnameModification;
            user.username=$scope.usernameModification;
            user.mail=$scope.mailModification;
            user.birthDate=$scope.birthDateModification;
            user.isActive=$scope.accountState;
            user.isSupplier=$scope.userType;

            if(user.isSupplier==true) {
                user.isPrivateIndividual=$scope.professionalState;
                user.isValid=$scope.supplierAccountState;

                if(user.isPrivateIndividual==false){
                    console.log("fskdfhksdfhk");
                    user.companyName=$scope.companyNameModification;
                    user.companyAddress=$scope.companyAddressModification;
                    user.siretNumber=$scope.siretNumberModification;
                }
                UserListService.updateSupplier().query(user).$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès modification", "Les informations de l'utilisateur ont été modifiées avec succès");
                        },
                        function error() {

                        }
                    );
            }
            else{
                UserListService.updatePlayer().query(user).$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès modification", "Les informations de l'utilisateur ont été modifiées avec succès");
                        },
                        function error() {

                        }
                    );
            }
        }
    }]);
