import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-414-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, URI te groot',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'URI te groot',
      text: `<p>De URI is groter dan de door de server gedefinieerde limiet. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 414">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 414.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

