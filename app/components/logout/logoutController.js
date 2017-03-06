'use strict';

controllers.controller('LogoutCtrl',['$scope','LogoutService','$location',function($scope,LogoutService,$location){

    LogoutService.logout().query();
    $location.path('/login');
}]);
