/**
 * Created by Jeremy on 04/12/2016.
 */


describe('Consulter les demandes fournisseurs', function() {

    it('a success sign-in', function () {
        browser.get("http://localhost:63342/oonoz_front/app/index.html?#/login");
        element(by.model('username')).sendKeys('Jilief');
        element(by.model('userPassword')).sendKeys('password');
        element(by.buttonText('Connexion')).click();
        //expect(element(by.id('tempText')).getText()).toMatch('Bienvenue sur la page principale');
        element(by.linkText('Demandes fournisseurs')).click();
        element( by.repeater('supplier in suppliersRequest').row(0).column('username') );
        browser.pause();
        element(by.binding('nopenopenope')).getText();
    });

});
