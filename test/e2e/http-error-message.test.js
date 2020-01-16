const { assert, driver } = require('vl-ui-core').Test;
const VlHttpErrorMessagePage = require('./pages/vl-http-error-message.page');

describe('vl-http-error-message', async () => {
    const vlHttpErrorMessagePage = new VlHttpErrorMessagePage(driver);

    before(() => {
        return vlHttpErrorMessagePage.load();
    });

    it('als gebruiker kan ik de foutmelding titel lezen', async () => {
    	const httpErrorMessage = await vlHttpErrorMessagePage.getCustomErrorMessage();
    	assert.eventually.equal(httpErrorMessage.getTitle(), "Niets gevonden hiervoor.");
    });

    it('als gebruiker kan ik de foutmelding content lezen', async () => {
		const httpErrorMessage = await vlHttpErrorMessagePage.getCustomErrorMessage();
		const typography = await httpErrorMessage._getTypography();
		assert.eventually.equal(httpErrorMessage.getContent(), 'Sorry, er liep iets onverwachts mis.');
    	assert.eventually.equal(typography.getInnerHTML(), '<p slot="text">Sorry, er liep iets onverwachts mis.</p>');
    });

    it('als gebruiker kan ik de foutmelding link zien', async () => {
		const httpErrorMessage = await vlHttpErrorMessagePage.getCustomErrorMessage();
		const link = await httpErrorMessage._getAction();
    	assert.eventually.equal(link.getText(), "Opnieuw opstarten");
    });

    it('als gebruiker kan ik de foutmelding afbeelding zien', async () => {
    	const httpErrorMessage = await vlHttpErrorMessagePage.getCustomErrorMessage();
		const image = await httpErrorMessage._getImage();
    	assert.eventually.equal(image.getAttribute('src'), "http://localhost:8080/demo/error-404.png");
    	assert.eventually.equal(image.getAttribute('alt'), "Niets gevonden");
    });

    it('als gebruiker kan ik op de actieknop van een 404 foutmelding klikken om naar de startpagina te gaan', async () => {
    	const originalUrl = await driver.getCurrentUrl();
    	assert.isFalse(originalUrl.endsWith('/'));
    	
    	const httpErrorMessage = await vlHttpErrorMessagePage.getNotFoundMessage();
    	await httpErrorMessage.clickOnAction();
    	
    	const urlAfterClick = await driver.getCurrentUrl();
    	assert.isTrue(urlAfterClick.endsWith('/'));
    });
});
