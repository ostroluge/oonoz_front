'use strict';

controllers.controller('SearchQCMCtrl', ['$scope', 'SearchQCMService', 'AddQCMService', 'usSpinnerService','$routeParams',
    function ($scope, SearchQCMService, AddQCMService, usSpinnerService,$routeParams) {

        $scope.themes = {};
        $scope.result = {};
        $scope.hasGiftFilter=false;
        $scope.categories=["formatif","sommatif"];

        var idTheme=$routeParams.idTheme;
        var idSubTheme=$routeParams.idSubTheme;
        console.log(idSubTheme);
        /**
         * Get validated themes to fill select box.
         */
        AddQCMService.getValidatedThemes().query().$promise
            .then(
                function success(response) {
                    $scope.themes = response;
                    /**Pre-sélection d'un thème**/
                    if(idTheme!==undefined)
                        $scope.themes.forEach(function(theme){
                            if (theme.idTheme == idTheme) {
                                $scope.themeFilter = theme;
                                $scope.subthemes=theme.subThemes;
                                /**Pre-sélection d'un sous-thème**/
                                if(idSubTheme!==undefined){
                                    theme.subThemes.forEach(function(subTheme){
                                        if(subTheme.id == idSubTheme){
                                            $scope.subthemeFilter=subTheme;
                                        }
                                    });
                                }
                                $scope.search();
                            }
                        })
                },
                function error(response) {
                }
            )
        ;

        $scope.onThemeSelect= function(theme){
            /**Check if blank option is not selected**/
            if(theme!==undefined && theme!==null)
             $scope.subthemes=theme.subThemes;
            else{
                /**Remove sub-themes when blank option is selected**/ 
                $scope.subthemes={};
            }
        };

        /** Click on search button **/
        $scope.search = function () {
            var searchFilter = {};
            searchFilter.labelSearch=$scope.nameFilter;
            if($scope.themeFilter!==undefined && $scope.themeFilter!==null)
                searchFilter.idTheme=$scope.themeFilter.idTheme;
            if($scope.subthemeFilter!==undefined && $scope.subthemeFilter!==null)
                searchFilter.idSubTheme=$scope.subthemeFilter.id;
            searchFilter.category=$scope.categoryFilter;
            searchFilter.maxPrice=$scope.maxPriceFilter;
            searchFilter.hasGift=$scope.hasGiftFilter;
            //usSpinnerService.spin('spinner-1');
            SearchQCMService.filteredSearch().query(searchFilter).$promise
                .then(
                    function success(response) {
                        $scope.result = response;

                    },
                    function error(response) {

                    }
                ).finally(function last() {
                //usSpinnerService.stop('spinner-1');
            })
        };

        /**
         * Clear filter form
         */
        $scope.clearForm = function () {
            $scope.nameFilter = null;
            $scope.maxPriceFilter = null;
            $scope.hasGiftFilter = false;
        };

    }]);
