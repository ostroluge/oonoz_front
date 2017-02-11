/**
 * Created by Jeremy on 16/01/2017.
 */
controllers.controller('themeCtrl', ['$scope', 'themeService','$location','$rootScope',
    function ($scope, themeService,$location,$rootScope) {
        $scope.items = [];
        $scope.theme;
        $scope.sbTheme;


        $scope.getThemes = function () {
            $scope.subTheme = false;
            themeService.getAllValidatedThemes().query()
                .$promise
                .then(
                    function success(data) {
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
                $scope.theme = this.item.idTheme;
                themeService.getThemeSubTheme(idTheme).query()
                    .$promise
                    .then(
                        function success(data) {
                            $scope.items = data;
                        },
                        function error() {
                            console.log("Error themeListCtrl:getAllThemes")
                        }
                    );
            }else {
                $scope.sbTheme = this.item.id;
                $location.path("/qcms/search/"+$scope.theme+"/"+$scope.sbTheme);
            }

        };


        $scope.clickAll = function(){
            $scope.sbTheme = "";
            $location.path("/qcms/search/"+$scope.theme);
        }
    }
]);


