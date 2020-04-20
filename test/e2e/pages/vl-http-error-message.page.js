const VlHttpErrorMessage = require('../components/vl-http-error-message');
const { Page, Config } = require('vl-ui-core').Test;

class VlHttpErrorMessagePage extends Page {
    async get404() {
        return this._getHttpErrorMessage('#error-404');
    }

    async get500() {
        return this._getHttpErrorMessage('#error-500');
    }

    async getCustomErrorMessage() {
    	return this._getHttpErrorMessage('#custom-message');
    }
    
    async load() {
        await super.load(Config.baseUrl + '/demo/vl-http-error-message.html');
    }

    async _getHttpErrorMessage(selector) {
        return new VlHttpErrorMessage(this.driver, selector);
    }
}

module.exports = VlHttpErrorMessagePage;
