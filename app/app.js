'use strict';

// Declare app level module which depends on views, and components
var oonozApp = angular.module('oonozApp', [
    'ngRoute',
    'LoginCtrl'
]);

oonozApp.config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'components/login/loginView.html',
            controller: 'LoginCtrl'
        })
        .otherwise({redirectTo: '/login'});
}]);