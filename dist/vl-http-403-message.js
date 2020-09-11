import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-403-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, de toegang werd geweigerd',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Onvoldoende rechten',
      text: `<p>Voor het verzoek dat u heeft gedaan, heeft u niet voldoende rechten. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 403">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 403.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});