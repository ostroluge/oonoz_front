'use strict';

// Declare app level module which depends on views, and components
var services = angular.module('services', []);
var models = angular.module('models', []);
var controllers = angular.module('controllers', []);
var oonozApp = angular.module('oonozApp', [
    'ngRoute',
    'ngResource',
    'services',
    'controllers',
    'models',
    'dialogs.main',
    'ui.bootstrap',
    'ultimateDataTableServices',
    'naif.base64',
    'ngMessages',
    'ngFileUpload',
    'angularSpinner'
]);

oonozApp.config(['$locationProvider', '$routeProvider', '$httpProvider','usSpinnerConfigProvider', function ($locationProvider, $routeProvider,$httpProvider,usSpinnerConfigProvider) {
    $httpProvider.defaults.withCredentials = true;
    $routeProvider
        .when('/login', {
            templateUrl: 'components/login/loginView.html',
            controller: 'LoginCtrl'
        })
        .when('/home', {
            templateUrl: 'components/home/homeView.html'
            //controller: 'LoginCtrl'
        })
        .when('/signup', {
            templateUrl: 'components/signup/signupView.html',
            controller: 'SignUpCtrl'
        })
        .when('/mailValidation/:mail/:mailKey', {
            templateUrl: 'components/signup/validationSignupView.html',
            controller: 'ValidationSignUpCtrl'
        })
        .when('/generatePassword', {
            templateUrl: 'components/generatePassword/generatePasswordView.html',
            controller: 'generatePasswordCtrl'
        })
        .when('/terms/:type', {
            templateUrl: 'components/term/termView.html',
            controller: 'TermCtrl'
        })
        .when('/admin/userList', {
            templateUrl: 'components/admin/userList/userListView.html',
            controller: 'UserListCtrl'
        })
        .when('/themes', {
            templateUrl: 'components/admin/themes/themeList/themeListView.html',
            controller: 'ThemeListCtrl'
        })
        .when('/themes/new', {
            templateUrl: 'components/admin/themes/addTheme/addThemeView.html',
            controller: 'AddThemeCtrl'
        })
        .when('/themes/:id/subthemes/new', {
            templateUrl: 'components/admin/themes/addSubTheme/addSubThemeView.html',
            controller: 'AddSubThemeCtrl'
        })
        .when('/themes/:id/edit', {
            templateUrl: 'components/admin/themes/editTheme/editThemeView.html',
            controller: 'EditThemeCtrl'
        })
        .when('/themes/:idTheme/subthemes/:idSubTheme/edit', {
            templateUrl: 'components/admin/themes/editSubTheme/editSubThemeView.html',
            controller: 'EditSubThemeCtrl'
        })
        .when('/admin/getSupplierRequest', {
            templateUrl: 'components/admin/supplierRequest/suppliersRequestView.html',
            controller: 'suppliersRequestCtrl'
        })
        .when('/admin/createAccount', {
            templateUrl: 'components/admin/createAccount/createAccountView.html',
            controller: 'createAccountCtrl'
        })
        .when ('/user/getSupplierQCM',{
            templateUrl: 'components/supplier/listingQCM/listingQCMView.html',
            controller: 'listingQCMCtrl'
        })
        .when ('/account',{
            templateUrl: 'components/account/accountView.html'
            //controller: 'accountCtrl'
        })
        .when('/qcm/qcmDetail/:id', {
            templateUrl: 'components/qcm/qcmDetail/qcmDetailView.html',
            controller: 'QcmDetailCtrl'
        })
        .when('/qcms/new', {
            templateUrl: 'components/qcm/addQCM/addQCM.html',
            controller: 'AddQCMCtrl'
        })
        .when('/qcms/:id/edit', {
            templateUrl: 'components/qcm/editQCM/editQCM.html',
            controller: 'EditQCMCtrl'
        })
        .otherwise({redirectTo: '/login'});

    /**Set default configuration for load sprinner**/
    usSpinnerConfigProvider.setDefaults({radius:30, width:8, length: 16});
}]);
   
