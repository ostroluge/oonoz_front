/**
 * Created by vincent on 10/10/2016.
 */
models.factory('PlayerModel', function() {

   return function PlayerModel (data) {
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.mail=data.mail;
        this.username=data.username;
        this.password=data.password;
        this.birthDate=data.birthDate;
        this.credit=data.credit;
    };


});
