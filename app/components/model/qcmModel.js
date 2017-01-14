/**
 * Created by Jeremy on 06/12/2016.
 */

models.factory('QcmModel', function() {

    return function QcmModel (data) {
        this.name=data.name;
        this.description=data.description;
        this.price=data.price;
        this.icon=data.icon;
        this.category=data.category;
        this.validated=data.validated;
    };


});
