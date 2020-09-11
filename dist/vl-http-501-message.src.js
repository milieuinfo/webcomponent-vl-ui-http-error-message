import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-501-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, verzoek niet ondersteund',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Niet ondersteund',
      text: `<p>Uw verzoek wordt niet ondersteund door de server en kan niet afgehandeld worden.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

