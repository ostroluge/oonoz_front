'use strict';
services.factory('EditQCMService', ['$resource',function ($resource) {
    return {
        getQCM: function (id) {
            return $resource("http://localhost:8092/qcms/"+id, {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        },
        editQCM: function (id) {
            return $resource("http://localhost:8092/qcms/"+id, {}, {
                query: {
                    method: 'PUT',
                    cache: false,
                    isArray: false
                }
            })
        },
        editQuestion: function (idQCM,idQuestion) {
            return $resource("http://localhost:8092/qcms/"+idQCM+"/questions/"+idQuestion, {}, {
                query: {
                    method: 'PUT',
                    cache: false,
                    isArray: false
                }
            })
        },
        createQuestion: function (idQCM) {
            return $resource("http://localhost:8092/qcms/"+idQCM+"/questions", {}, {
                query: {
                    method: 'POST',
                    cache: false,
                    isArray: false
                }
            })
        },
        getQuestionByNumber: function (qcmId,questionNumber) {
            return $resource("http://localhost:8092/qcms/"+qcmId+"/questions/questionNumber/"+questionNumber, {}, {
                query: {
                    method: 'GET',
                    cache: false,
                    isArray: false
                }
            });
        },

    }}]);
