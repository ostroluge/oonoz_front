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
controllers.controller('SignUpCtrl', ['$scope','$location','SignUpService','PlayerModel',
    function ($scope, $location,SignUpService,PlayerModel) {

        $scope.submit=function () {

            var player=new PlayerModel($scope);

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

    }]);