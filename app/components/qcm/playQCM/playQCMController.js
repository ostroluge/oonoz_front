'use strict';

controllers.controller('PlayQCMCtrl',['$scope','$timeout', 'PlayQCMService','usSpinnerService','$routeParams',
    function ($scope,$timeout, PlayQCMService,usSpinnerService,$routeParams) {

        var questionNumber=0;
        $scope.answers=new Int8Array(20).fill(0);
        var idQCM=$routeParams.idQCM;

        $scope.btnResponseStyle={};
        PlayQCMService.getValidatedQcm(idQCM).query().$promise
            .then(
                function success(response) {
                    $scope.qcm=response;
                    $scope.question=$scope.qcm.questions[questionNumber];
                },
                function error(){

                });

        /**
         * When the user respond.
         * good response = 2
         * bad response = 1
         * no response = 0
         * @param proposition
         */
        $scope.respond=function(proposition){

            if(proposition===$scope.question.answer){
                $scope.answers[questionNumber]=2;
                $scope.btnResponseStyle={'background-color':'#42f480','color':'black'};
            }
            else{
                $scope.answers[questionNumber]=1;
                $scope.btnResponseStyle={'background-color':'#dd483e','color':'black'};
            }

            $timeout(function(){
                questionNumber++;
                $scope.question=$scope.qcm.questions[questionNumber];
            },2000);
        };


    }]);
