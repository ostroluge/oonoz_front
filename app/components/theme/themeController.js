/**
 * Created by Jeremy on 16/01/2017.
 */
controllers.controller('themeCtrl', ['$scope', 'themeService',
    function ($scope, themeService) {
        $scope.items = [];

        $scope.getThemes = function () {
            $scope.subTheme = false;
            themeService.getAllValidatedThemes().query()
                .$promise
                .then(
                    function success(data) {
                        console.log(data);
                        $scope.items = data;
                    },
                    function error() {
                        console.log("Error themeListCtrl:getAllThemes")
                    }
                );
        };

        $scope.clickOnTheme = function(idTheme){
            $scope.subTheme = true;
            themeService.getThemeSubTheme(idTheme).query()
                .$promise
                .then(
                    function success(data) {
                        console.log(data);
                        $scope.items = data;
                    },
                    function error() {
                        console.log("Error themeListCtrl:getAllThemes")
                    }
                );
        };
    }
]);


