import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-405-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Niet toegelaten',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Niet toegelaten',
      text: `<p>Er ging iets fout. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 405">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 405.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
