const { assert, driver } = require('vl-ui-core').Test;
const VlHttpErrorMessagePage = require('./pages/vl-http-error-message.page');

describe('vl-proza-message', async () => {
    const vlHttpErrorMessagePage = new VlHttpErrorMessagePage(driver);

    before(() => {
        return vlHttpErrorMessagePage.load();
    });

    it('kan de teksten opvragen van de http error message', async () => {
    	const httpErrorMessage = await vlHttpErrorMessagePage.getCustomErrorMessage();
    	
    	const title = await httpErrorMessage.getTitle();
    	assert.equal(title, "Niets gevonden hiervoor.");
    	
    	const content = await httpErrorMessage.getContent();
    	assert.equal(content, '<p slot="text">Sorry, er liep iets onverwachts mis.</p>');

    	const linkText = await httpErrorMessage.getLinkText();
    	assert.equal(linkText, "Opnieuw opstarten");

    	const imageSource = await httpErrorMessage.getImageSource();
    	assert.equal(imageSource, "http://localhost:8080/demo/error-404.png");

    	const imageAlt = await httpErrorMessage.getImageAlt();
    	assert.equal(imageAlt, "Niets gevonden");
    });

    it('klikken op de actieknop van een 404 bericht zal de gebruiker omleiden naar de startpagina', async () => {
    	const originalUrl = await driver.getCurrentUrl();
    	assert.isFalse(originalUrl.endsWith('/'));
    	
    	const httpErrorMessage = await vlHttpErrorMessagePage.getNotFoundMessage();
    	await httpErrorMessage.clickOnLink();
    	
    	const urlAfterClick = await driver.getCurrentUrl();
    	assert.isTrue(urlAfterClick.endsWith('/'));
    });
});
