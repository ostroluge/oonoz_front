describe('Test the login component', function() {

    it('a success sign-in', function() {
        browser.get("http://localhost:63342/oonoz_front/app/index.html#/login");
        element(by.model('username')).sendKeys('jalzuritro');
        element(by.model('userPassword')).sendKeys('GwQstr8dy');

        element(by.buttonText('Connexion')).click();
        expect(element(by.id('tempText')).getText()).toMatch('Bienvenue sur la page principale');
    });

    it('a fail sign-in', function() {
        browser.get("http://localhost:63342/oonoz_front/app/index.html#/login");
        element(by.model('username')).sendKeys('jalzuritro');
        element(by.model('userPassword')).sendKeys('badpassword');

        element(by.buttonText('Connexion')).click();

        expect(element(by.css('span.errorForm')).isDisplayed()).toBe(true);
    });

    it('click on link subscription and check the page changing', function() {
        browser.get("http://localhost:63342/oonoz_front/app/index.html#/login");
        element(by.linkText("Pas de compte? Je m'inscris")).click();
        expect(element(by.className('titre')).getText()).toMatch("Je m'inscris");
    });

});