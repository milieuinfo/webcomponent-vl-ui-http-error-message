const { VlElement } = require('vl-ui-core');
const { By } = require('selenium-webdriver');

class VlHttpErrorMessage extends VlElement {
    async clickOnButton() {
        const button = await this._getActionButton();
        return button.click();
    }

    async _getActionButton() {
        return this.shadowRoot.findElement(By.css('button'));
    }
}

module.exports = VlHttpErrorMessage;
