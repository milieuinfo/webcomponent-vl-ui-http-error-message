import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-505-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, niet ondersteunde HTTP versie',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Niet ondersteunde HTTP versie',
      text: `<p>Uw verzoek is gebeurd met een HTTP versie die niet ondersteund wordt door de server.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

