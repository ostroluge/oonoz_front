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
controllers.controller('generatePasswordCtrl', ['$scope','$location','generatePasswordService','PlayerModel',
    function ($scope, $location,generatePasswordService,PlayerModel) {

        $scope.submit=function () {
            generatePasswordService.generate($scope.mail)
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