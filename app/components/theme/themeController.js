/**
 * Created by Jeremy on 16/01/2017.
 */
controllers.controller('themeCtrl', ['$scope', 'themeService','$location','$rootScope',
    function ($scope, themeService,$location,$rootScope) {
        $scope.items = [];
        $rootScope.theme;
        $rootScope.sbTheme;


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
            if (!$scope.subTheme){
                $scope.subTheme = true;
                $rootScope.theme = this.item.label;
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
            }else {
                $rootScope.sbTheme = this.item.label;
                $location.path("/home");
            }

        };


        $scope.clickAll = function(){
            $rootScope.sbTheme = "";
            $location.path("/home");
        }
    }
]);


