/**
 * Created by vincent on 10/10/2016.
 */
models.factory('SupplierModel', function() {

    return function SupplierModel (data) {
        this.id=data.id;
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.mail=data.mail;
        this.username=data.username;
        this.password=data.password;
        this.birthDate=data.birthDate;
        this.companyName=data.companyName;
        this.companyAddress=data.companyAddress;
        this.siretNumber=data.siretNumber;
    };


});
