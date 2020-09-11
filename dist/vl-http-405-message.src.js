import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-405-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, verzoek werd niet toegelaten',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Niet toegelaten',
      text: `<p>Uw verzoek werd niet toegelaten. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 405">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 405.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

