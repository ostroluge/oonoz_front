/**
 * Created by Jeremy on 04/12/2016.
 */


describe('creation de compte', function() {

    it('refuser compte fournisseur', function () {
        browser.get("http://localhost:63342/oonoz_front/app/index.html?#/login");
        element(by.linkText('Pas de compte? Je m\'inscris')).click();
        element(by.model('username')).sendKeys('demandeFournisseur');
        element(by.model('firstName')).sendKeys('demandeFournisseur');
        element(by.model('lastName')).sendKeys('demandeFournisseur');
        element(by.model('mail')).sendKeys('demandeFournisseur@yopmail.com');
        element(by.model('password')).sendKeys('Password59');
        element(by.model('passwordConfirmation')).sendKeys('Password59');
        element(by.model('birthDate')).sendKeys('25/10/2016');
        element(by.css("label[for='wannaBeSupplier']")).click();
        element(by.model('typeAccount')).click();
        element(by.model('termsOfService')).click();
        element(by.buttonText("S'inscrire")).click();
        element(by.linkText('Déjà un compte ? Se connecter')).click();
        element(by.model('username')).sendKeys('Jilief');
        element(by.model('userPassword')).sendKeys('password');
        element(by.buttonText('Connexion')).click();
        element(by.linkText('Demandes fournisseurs')).click();
        browser.sleep(2000);
        console.log(element(by.xpath('/*button[text()="Refuser"]')));
    });


    it('create player account', function () {
        browser.get("http://localhost:63342/oonoz_front/app/index.html?#/login");
        element(by.linkText('Pas de compte? Je m\'inscris')).click();
        element(by.model('username')).sendKeys('player');
        element(by.model('firstName')).sendKeys('player');
        element(by.model('lastName')).sendKeys('player');
        element(by.model('mail')).sendKeys('player_oonoz@yopmail.com');
        element(by.model('password')).sendKeys('Password59');
        element(by.model('passwordConfirmation')).sendKeys('Password59');
        element(by.model('birthDate')).sendKeys('25/10/2016');
        element(by.model('termsOfService')).click();
        element(by.buttonText("S'inscrire")).click();
        element(by.linkText('Déjà un compte ? Se connecter')).click();
        element(by.model('username')).sendKeys('Ching chong');
        element(by.model('userPassword')).sendKeys('password');
        element(by.buttonText('Connexion')).click();
        element(by.linkText('Demandes fournisseurs')).click();
        browser.sleep(2000);
        console.log(element(by.xpath('/*button[text()="Refuser"]')));

    });

});
