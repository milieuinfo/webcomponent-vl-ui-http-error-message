import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-411-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, onvolledig verzoek',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verzoek onvolledig',
      text: `<p>Uw verzoek ontbreekt een content-length header. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 411">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 411.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});