const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlHttpErrorMessagePage = require('./pages/vl-http-error-message.page');

describe('vl-http-error-message', async () => {
  const vlHttpErrorMessagePage = new VlHttpErrorMessagePage(driver);

  beforeEach(() => {
    return vlHttpErrorMessagePage.load();
  });

  it('als gebruiker kan ik de foutmelding titel lezen', async () => {
    let message = await vlHttpErrorMessagePage.get404();
    await assert.eventually.equal(message.getTitle(), 'Pagina niet gevonden');

    message = await vlHttpErrorMessagePage.get500();
    await assert.eventually.equal(message.getTitle(), 'Interne fout');

    message = await vlHttpErrorMessagePage.getCustomErrorMessage();
    await assert.eventually.equal(message.getTitle(), 'Niets gevonden hiervoor.');
  });

  it('als gebruiker kan ik de foutmelding content lezen', async () => {
    let message = await vlHttpErrorMessagePage.get404();
    await assert.eventually.equal(message.getContent(), '<p>We vonden de pagina niet terug. Controleer even of u een tikfout heeft gemaakt. Bent u via een link of website op deze pagina gekomen. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 404">Mail dan de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 404.</p>');

    message = await vlHttpErrorMessagePage.get500();
    await assert.eventually.equal(message.getContent(), '<p>Er ging iets fout. Probeer het nog eens. Lukt het nog niet, <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 500">mail dan de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 500.</p>');

    message = await vlHttpErrorMessagePage.getCustomErrorMessage();
    await assert.eventually.equal(message.getContent(), 'Sorry, er liep iets onverwachts mis.');
  });

  it('als gebruiker kan ik de foutmelding link zien', async () => {
    let httpErrorMessage = await vlHttpErrorMessagePage.get404();
    let link = await httpErrorMessage._getAction();
    await assert.eventually.equal(link.getText(), 'Terug naar de startpagina');

    httpErrorMessage = await vlHttpErrorMessagePage.get500();
    link = await httpErrorMessage._getAction();
    await assert.eventually.equal(link.getText(), 'Terug naar de pagina');

    httpErrorMessage = await vlHttpErrorMessagePage.getCustomErrorMessage();
    link = await httpErrorMessage._getAction();
    await assert.eventually.equal(link.getText(), 'Opnieuw opstarten');
  });

  it('als gebruiker kan ik de foutmelding afbeelding zien', async () => {
    let httpErrorMessage = await vlHttpErrorMessagePage.get404();
    let image = await httpErrorMessage.getImage();
    await assert.eventually.equal(image.getAttribute('src'), 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg');
    await assert.eventually.equal(image.getAttribute('alt'), 'Pagina niet gevonden');

    httpErrorMessage = await vlHttpErrorMessagePage.get500();
    image = await httpErrorMessage.getImage();
    await assert.eventually.equal(image.getAttribute('src'), 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg');
    await assert.eventually.equal(image.getAttribute('alt'), 'Onverwachte fout');

    httpErrorMessage = await vlHttpErrorMessagePage.getCustomErrorMessage();
    image = await httpErrorMessage.getImage();
    assert.isTrue((await image.getAttribute('src')).endsWith('demo/error-404.png'));
    await assert.eventually.equal(image.getAttribute('alt'), 'Niets gevonden');
  });

  it('als gebruiker kan ik op de actieknop van een 404 foutmelding klikken om naar de startpagina te gaan', async () => {
    const originalUrl = await driver.getCurrentUrl();
    assert.isFalse(originalUrl.endsWith('/'));
    let httpErrorMessage = await vlHttpErrorMessagePage.get404();
    await httpErrorMessage.clickOnAction();
    let urlAfterClick = await driver.getCurrentUrl();
    assert.isTrue(urlAfterClick.endsWith('/'));

    await vlHttpErrorMessagePage.load();
    httpErrorMessage = await vlHttpErrorMessagePage.get500();
    await httpErrorMessage.clickOnAction();
    urlAfterClick = await driver.getCurrentUrl();
    assert.isTrue(urlAfterClick.endsWith('/'));

    await vlHttpErrorMessagePage.load();
    httpErrorMessage = await vlHttpErrorMessagePage.getCustomErrorMessage();
    await httpErrorMessage.clickOnAction();
    urlAfterClick = await driver.getCurrentUrl();
    assert.isTrue(urlAfterClick.endsWith('#demo'));
  });
});
