'use strict';

controllers.controller('PlayQCMCtrl',['$scope', 'PlayQCMService','usSpinnerService','$routeParams',
    function ($scope, PlayQCMService,usSpinnerService,$routeParams) {

        var questionNumber=0;
        $scope.answers=new Int8Array(20).fill(0);
        var idQCM=$routeParams.idQCM;
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
            }
            else{
                $scope.answers[questionNumber]=1;
            }
            questionNumber++;
            $scope.question=$scope.qcm.questions[questionNumber];
        }
    }]);
