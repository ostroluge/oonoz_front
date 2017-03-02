'use strict';

controllers.controller('PlayQCMCtrl',['$scope','$timeout', 'PlayQCMService','usSpinnerService','$routeParams','sha256',
    function ($scope,$timeout, PlayQCMService,usSpinnerService,$routeParams,sha256) {

        var questionNumber=0;
        $scope.answers=new Int8Array(20).fill(0);
        var idQCM=$routeParams.idQCM;

        $scope.btnResponseStyle={};
        PlayQCMService.getValidatedQcm(idQCM).query().$promise
            .then(
                function success(response) {
                    $scope.qcm=response;
                    randomProposition($scope.qcm.questions[questionNumber]);
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
            var encrypt=sha256.convertToSHA256(proposition);
            
            if(encrypt===$scope.question.encryptAnswer){
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

        function randomProposition(question){
            var propositions=[];
            propositions.push(question.proposition1);
            propositions.push(question.proposition2);
            propositions.push(question.proposition3);
            propositions.push(question.proposition4);
            propositions=shuffle(propositions);
            $scope.question=question;
            $scope.question.proposition1=propositions[0];
            $scope.question.proposition2=propositions[1];
            $scope.question.proposition3=propositions[2];
            $scope.question.proposition4=propositions[3];
        };

        function shuffle(a) {
            var j, x, i;
            for (i = a.length; i; i--) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
            return a;
        };


    }]);
