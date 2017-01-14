/**
 * Created by vincent on 10/12/2016.
 */

models.factory('QuestionModel', function() {

    return function QuestionModel (data) {
        this.id=data.id;
        this.idQCM=data.idQCM;
        this.title=data.title;
        this.media=data.media;
        this.mediaType=data.mediaType;
        this.answer=data.answer;
        this.proposition1=data.proposition1;
        this.proposition2=data.proposition2;
        this.proposition3=data.proposition3;
        this.questionNumber=data.questionNumber;
        this.time=data.time;
    };
});
