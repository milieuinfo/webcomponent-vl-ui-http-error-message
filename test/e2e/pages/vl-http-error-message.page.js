const VlHttpErrorMessage = require('../components/vl-http-error-message');
const {Page, Config} = require('vl-ui-core').Test;

class VlHttpErrorMessagePage extends Page {
  async getError() {
    return this._getHttpErrorMessage('#error');
  }

  async load(type) {
    await super.load(Config.baseUrl + `/demo/vl-http-${type || 'error'}-message.html`);
  }

  async _getHttpErrorMessage(selector) {
    return new VlHttpErrorMessage(this.driver, selector);
  }
}

module.exports = VlHttpErrorMessagePage;
