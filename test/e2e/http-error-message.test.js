const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlHttpErrorMessagePage = require('./pages/vl-http-error-message.page');

describe('vl-http-error-message', async () => {
  let driver;
  let vlHttpErrorMessagePage;
  const types = [400, 401, 403, 404, 405, 408, 410, 411, 412, 413, 414, 415, 500, 501, 502, 503, 504, 505, 506, 'custom'];

  beforeEach(() => {
    driver = getDriver();
    vlHttpErrorMessagePage = new VlHttpErrorMessagePage(driver);
    return vlHttpErrorMessagePage.load();
  });

  const forAllTypes = async (callback) => {
    for (const i in types) {
      if (i && types[i]) {
        await callback(types[i]);
      }
    }
  };

  it('WCAG', async () => {
    await forAllTypes(async (type) => {
      await vlHttpErrorMessagePage.load(type);
      await assert.eventually.isFalse(vlHttpErrorMessagePage.hasWcagIssues());
    });
  }).timeout(50000);

  it('als gebruiker kan ik de foutmelding titel lezen', async () => {
    await forAllTypes(async (type) => {
      await vlHttpErrorMessagePage.load(type);
      const httpErrorMessage = await vlHttpErrorMessagePage.getError();
      await assert.eventually.isDefined(httpErrorMessage.getTitle());
    });
  });

  it('als gebruiker kan ik de foutmelding content lezen', async () => {
    await forAllTypes(async (type) => {
      await vlHttpErrorMessagePage.load(type);
      const httpErrorMessage = await vlHttpErrorMessagePage.getError();
      await assert.eventually.isDefined(httpErrorMessage.getContent());
    });
  });

  it('als gebruiker kan ik de foutmelding link zien', async () => {
    await forAllTypes(async (type) => {
      await vlHttpErrorMessagePage.load(type);
      const httpErrorMessage = await vlHttpErrorMessagePage.getError();
      const link = await httpErrorMessage._getAction();
      await assert.eventually.isDefined(link.getText());
    });
  });

  it('als gebruiker kan ik de foutmelding afbeelding zien', async () => {
    const getImgSrc = (type) => {
      switch (type) {
        case 400:
        case 401:
        case 403:
        case 405:
        case 408:
        case 411:
        case 412:
        case 413:
        case 414:
        case 415:
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 505:
        case 506:
          return '/unexpected-error.svg';
        case 404:
        case 410:
          return '/page-not-found.svg';
        case 'custom':
          return '/error-404.png';
      }
    };

    await forAllTypes(async (type) => {
      await vlHttpErrorMessagePage.load(type);
      const httpErrorMessage = await vlHttpErrorMessagePage.getError();
      const image = await httpErrorMessage.getImage();
      await assert.isTrue((await image.getAttribute('src')).endsWith(getImgSrc(type)));
      await assert.eventually.equal(image.getAttribute('alt'), '');
    });
  });

  it('als gebruiker kan ik op de actieknop van een foutmelding klikken om naar de startpagina te gaan', async () => {
    const getPath = (type) => {
      switch (type) {
        case 400:
        case 401:
        case 403:
        case 404:
        case 405:
        case 408:
        case 410:
        case 411:
        case 412:
        case 413:
        case 414:
        case 415:
        case 501:
        case 502:
        case 503:
        case 504:
        case 505:
        case 506:
          return '/';
        case 500:
          return '/demo/vl-http-500-message.html?no-header=true&no-footer=true';
        case 'custom':
          return '#demo';
      }
    };

    await forAllTypes(async (type) => {
      await vlHttpErrorMessagePage.load(type);
      const httpErrorMessage = await vlHttpErrorMessagePage.getError();
      await httpErrorMessage.clickOnAction();
      const urlAfterClick = await driver.getCurrentUrl();
      assert.isTrue(urlAfterClick.endsWith(getPath(type)));
    });
  });
});
