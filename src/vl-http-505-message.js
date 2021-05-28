import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/src/vl-http-error-message.js';

define('vl-http-505-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'HTTP-versie niet ondersteund',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: '',
      text: `<p>De HTTP-versie van uw verzoek wordt niet ondersteund door onze server. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 505">Mail de helpdesk</a> en vermeld daarbij de URL in de adresbalk hierboven en de foutcode 505.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
