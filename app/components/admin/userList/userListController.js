'use strict';

controllers.controller('UserListCtrl', ['$scope','datatable','UserListService',
    function ($scope,datatable,UserListService) {

        var datatableConfig = {
            "name":"simple_datatable",
            "columns":[
                {
                    "header":"Id",
                    "property":"id",
                    "order":false,
                    "type":"text"
                },
                {
                    "header":"Login",
                    "property":"login",
                    "order":false,
                    "type":"text"
                },
                {
                    "header":"Nom",
                    "property":"lastname",
                    "order":false,
                    "type":"text"
                },
                {
                    "header":"Prénom",
                    "property":"firstname",
                    "order":false,
                    "type":"text"
                },
                {
                    "header":"E-mail",
                    "property":"email",
                    "order":false,
                    "type":"text"
                }
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
                    
                    
                    console.log(line);
                    console.log(data);
                } //The action to execute when a user select a row. Check line.selected to know whether the user selected or unselected a row.
            }
        };

        var datatableData = [];
        $scope.datatable = datatable(datatableConfig);
        $scope.datatable.setData(datatableData);
        
        $scope.displayPage=function(pageNumber){

            var criteria={};
            criteria.usernameSearch=$scope.username;
            criteria.pageNumber=pageNumber;
            criteria.pageSize=5;

            UserListService.filteredSearch().query(criteria).$promise
                .then(
                    function success(response) {
                        console.log(response);
                        var datatableData = [];
                        for(var user in response.content )
                        {

                            datatableData.push({
                                "id": response.content[user].idPlayer,
                                "login": response.content[user].username,
                                "lastname": response.content[user].lastName,
                                "firstname": response.content[user].firstName,
                                "email": response.content[user].mail
                            });


                        }
                        $scope.range = new Array(response.totalPages);
                        $scope.datatable.setData(datatableData);
                    }

                    , function error() {


                    }
                );
        }


        $scope.search = function () {

            var criteria={};
            criteria.usernameSearch=$scope.username;
            criteria.lastnameSearch=$scope.lastname;
            criteria.firstnameSearch=$scope.firstname;
            criteria.pageSize="5";

            UserListService.filteredSearch().query(criteria).$promise
                .then(
                    function success(response) {
                           console.log(response);
                            var datatableData = [];
                            for(var user in response.content )
                            {

                                datatableData.push({
                                    "id": response.content[user].idPlayer,
                                    "login": response.content[user].username,
                                    "lastname": response.content[user].lastName,
                                    "firstname": response.content[user].firstName,
                                    "email": response.content[user].mail
                                });


                            }
                        $scope.range = new Array(response.totalPages);
                        $scope.datatable.setData(datatableData);
                        }

                    , function error() {


                    }
                );

        }
    }]);
