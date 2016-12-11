'use strict';
controllers.controller('EditQCMCtrl', ['$scope', 'dialogs', 'EditQCMService', 'AddQCMService', '$routeParams', '$location', 'QuestionModel',
    function ($scope, dialogs, EditQCMService, AddQCMService, $routeParams, $location, QuestionModel) {

        $scope.qcm = {};
        $scope.subThemesSelected = [];
        $scope.themes = [];
        $scope.subThemes = [];
        $scope.showGeneralForm = true;
        $scope.showQuestionForm = false;
        $scope.categories = [{label: 'Se tester'}, {label: 'Apprendre'}];
        $scope.editQuestionButtonText = "Modifier la question";

        AddQCMService.getThemes().query().$promise
            .then(
                function success(response) {
                    response.forEach(function (theme) {
                        if (theme.validated) {
                            $scope.themes.push(theme);
                        }
                    });
                },
                function error(response) {
                    /*if (response.status == 409) {
                     dialogs.error("Erreur", "L'utilisateur n'existe pas !")
                     }*/
                }
            );

        AddQCMService.getSuppliers().query().$promise
            .then(
                function success(response) {
                    $scope.suppliers = response;
                    getQCM();
                },
                function error(response) {

                }
            );

        $scope.getSubThemes = function (idTheme) {
            $scope.subThemes = [];
            $scope.subThemesSelected = [];
            AddQCMService.getSubThemes(idTheme).query().$promise
                .then(
                    function success(response) {
                        response.forEach(function (subTheme) {
                            if (subTheme.validated) {
                                $scope.subThemes.push(subTheme);
                            }
                        });
                    },
                    function error(response) {

                    }
                );
        };

        $scope.onSubThemeSelect = function (subTheme) {

            /**
             * Check if subtheme is not already selected
             */
            var index = $scope.subThemesSelected.indexOf(subTheme);

            if (index == -1) {
                $scope.subThemesSelected.push(subTheme);
            } else {
                dialogs.notify("Existe déjà !", "Le sous thème a déjà été sélectionné !");
            }
        };

        $scope.deleteSubTheme = function (index) {
            $scope.subThemesSelected.splice(index, 1);
        };

        var getQCM = function () {
            EditQCMService.getQCM($routeParams.id).query().$promise
                .then(
                    function success(response) {
                        $scope.qcm = response;

                        /**Set the default supplier of QCM in list*/
                        $scope.suppliers.forEach(function (supplier) {
                            if (supplier.idPlayer == $scope.qcm.idSupplier) {
                                $scope.supplier = supplier;
                            }
                        });

                        $scope.themes.forEach(function (theme) {
                            if (theme.idTheme === $scope.qcm.idTheme) {
                                $scope.theme = theme;
                                $scope.getSubThemes(theme.idTheme);
                                $scope.subThemesSelected = $scope.qcm.subThemes;
                            }
                        });


                        if ($scope.qcm.category === 'sommatif') {
                            $scope.categories.forEach(function (category) {
                                if (category.label === 'Se tester') {
                                    $scope.category = category;
                                }
                            });
                        } else if ($scope.qcm.category === 'formatif') {
                            $scope.categories.forEach(function (category) {
                                if (category.label === 'Apprendre') {
                                    $scope.category = category;
                                }
                            });
                        }

                    },
                    function error(response) {

                    }
                );
        };

        $scope.editQCM = function () {
            var qcm = {};

            qcm.id = $routeParams.id;
            qcm.name = $scope.qcm.name;
            qcm.description = $scope.qcm.description;
            qcm.idTheme = $scope.theme.idTheme;
            qcm.idSupplier = $scope.supplier.idPlayer;
            qcm.free = $scope.qcm.free;
            if (!$scope.qcm.free) {
                qcm.price = $scope.qcm.price;
            }
            qcm.category = $scope.getCategory($scope.category.label);
            qcm.minimalScore = $scope.qcm.minimalScore;
            qcm.subThemes = $scope.subThemesSelected;
            if ($scope.qcm.icon != null) {
                if ($scope.qcm.icon.base64 != null) {
                    qcm.icon = $scope.qcm.icon.base64;
                }
            }

            qcm.prizeName = $scope.qcm.prizeName;
            qcm.prizeDescription = $scope.qcm.prizeDescription;

            EditQCMService.editQCM(qcm.id).query(qcm)
                .$promise
                .then(
                    function success(response) {
                        dialogs.notify("Succès", "La modification s'est déroulée avec succès !");
                        $location.path('/qcms/' + qcm.id + '/edit');
                    },
                    function error(response) {
                        dialogs.error("Erreur", "Erreur lors de l'édition, veuillez réessayer ultérieurement.");
                    }
                );
        };

        $scope.getCategory = function (label) {
            if (label === 'Apprendre') {
                return 'formatif';
            } else {
                return 'sommatif';
            }
        };

        $scope.editQuestion = function (index) {
            if ($scope.question.id != "") {
                EditQCMService.editQuestion($routeParams.id, $scope.question.id).query($scope.question).$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès", "La question a été modifié avec succès !");
                        },
                        function error(response) {
                            dialogs.error("Erreur", "Une erreur est survenue !");
                        }
                    );
            }
            else {
                var newQuestion = {};
                newQuestion.title = $scope.question.title;
                newQuestion.answer = $scope.question.answer;
                newQuestion.proposition1 = $scope.question.proposition1;
                newQuestion.proposition2 = $scope.question.proposition2;
                newQuestion.proposition3 = $scope.question.proposition3;
                newQuestion.media = $scope.question.media;
                newQuestion.mediaType = $scope.question.mediaType;
                newQuestion.questionNumber = $scope.question.questionNumber;
                newQuestion.time = $scope.question.time;
                EditQCMService.createQuestion($routeParams.id).query(newQuestion).$promise
                    .then(
                        function success(response) {
                            dialogs.notify("Succès", "La question a été créée avec succès !");
                        },
                        function error(response) {
                            dialogs.error("Erreur", "Une erreur est survenue !");
                        }
                    );
            }

        };

        $scope.generalView = function () {
            $scope.showGeneralForm = true;
            $scope.showQuestionForm = false;
        };

        $scope.questionView = function (index) {
            EditQCMService.getQuestionByNumber($routeParams.id, index).query().$promise
                .then(
                    function success(response) {
                        $scope.showGeneralForm = false;
                        $scope.showQuestionForm = true;
                        $scope.editQuestionButtonText = "Modifier la question";
                        if (response.id == 0) {
                            cleanQuestionForm();
                            $scope.question.questionNumber = index;
                            $scope.editQuestionButtonText = "Créer";
                        } else {
                            $scope.question = new QuestionModel(response);
                        }
                    },
                    function error(response) {

                    }
                );
        };

        var cleanQuestionForm = function () {
            $scope.question.id = "";
            $scope.question.idQCM = "";
            $scope.question.title = "";
            $scope.question.media = "";
            $scope.question.mediaType = "";
            $scope.question.answer = "";
            $scope.question.proposition1 = "";
            $scope.question.proposition2 = "";
            $scope.question.proposition3 = "";
            $scope.question.questionNumber = "";
            $scope.question.time = "";
        }
    }]);