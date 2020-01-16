const { VlElement } = require('vl-ui-core');
const { VlTypography } = require('vl-ui-typography');
const { By } = require('selenium-webdriver');

class VlHttpErrorMessage extends VlElement {
    async getTitle() {
        const title = await this.shadowRoot.findElement(By.css('#title'));
        return title.getText();
    }

    async getContent() {
        const element = await this.shadowRoot.findElement(By.css('#text'));
        const typo = await new VlTypography(this.driver, element);
        return typo.getText();
    }

    async getActionButton() {
        return this.shadowRoot.findElement(By.css('a'));
    }
}

module.exports = VlHttpErrorMessage;
