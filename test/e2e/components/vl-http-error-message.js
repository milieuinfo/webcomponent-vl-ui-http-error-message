const { VlElement } = require('vl-ui-core');
const { VlTypography } = require('vl-ui-typography');
const { By } = require('selenium-webdriver');

class VlHttpErrorMessage extends VlElement {
    async getImageSource() {
        const smallImage = await this.shadowRoot.findElement(By.css('#image-small'));
        const normalImage = await this.shadowRoot.findElement(By.css('#image-normal'));
        const smallImageSrc = await smallImage.getAttribute("src");
        const normalImageSrc = await normalImage.getAttribute("src");
        if (smallImageSrc != normalImageSrc) {
        	throw new Error("Small en normal image src moeten gelijk zijn");
        }
        return smallImageSrc;
    }

    async getImageAlt() {
    	const smallImage = await this.shadowRoot.findElement(By.css('#image-small'));
    	const normalImage = await this.shadowRoot.findElement(By.css('#image-normal'));
    	const smallImageAlt = await smallImage.getAttribute("alt");
    	const normalImageAlt = await normalImage.getAttribute("alt");
        if (smallImageAlt != normalImageAlt) {
        	throw new Error("Small en normal image src moeten gelijk zijn");
        }
    	return smallImageAlt;
    }

    async getTitle() {
    	const title = await this.shadowRoot.findElement(By.css('#title'));
    	return title.getText();
    }

    async getLinkText() {
    	const link = await this.shadowRoot.findElement(By.css('a'));
    	return link.getText();
    }

    async getContent() {
    	const textElement = await this.shadowRoot.findElement(By.css('#text'));
    	const typography = await new VlTypography(this.driver, textElement);
        return typography.getText();
    }

    async clickOnLink() {
    	const link = await this.shadowRoot.findElement(By.css('a'));
        return link.click();
    }

}

module.exports = VlHttpErrorMessage;
