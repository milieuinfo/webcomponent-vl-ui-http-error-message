const { assert, driver } = require('vl-ui-core').Test;
const VlHttpErrorMessage = require('./pages/vl-http-error-message.page');

describe('vl-http-error-message', async () => {
    const vlHttpErrorMessage = new VlHttpErrorMessage(driver);

    before(() => {
        return vlHttpErrorMessage.load();
    });

    it('klikken op de actieknop van een 404 bericht zal de gebruiker omleiden naar de startpagina', async () => {
        const originalUrl = await driver.getCurrentUrl();
        assert.isFalse(originalUrl.endsWith('/'));

        await vlHttpErrorMessage.clickOnButton();

        const urlAfterClick = await driver.getCurrentUrl();
        assert.isTrue(urlAfterClick.endsWith('/'));

        await vlHttpErrorMessage.load();
    });

    it('titel van de error message word getoond bij een standaard component', async () => {
        const message = await vlHttpErrorMessage.getStandaardErrorMessageComponent();
        await assert.eventually.equal(message.getTitle(), 'Oeps, die pagina vonden we niet terug');
    });
    
    it('content van de error message word getoond bij een standaard component', async () => {
        const message = await vlHttpErrorMessage.getStandaardErrorMessageComponent();
        await assert.eventually.equal(message.getContent(), 'De pagina die u zoekt, vonden we niet terug.');

    })
});
