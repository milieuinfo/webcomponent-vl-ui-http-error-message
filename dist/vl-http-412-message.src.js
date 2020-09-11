import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-412-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, voorwaarden voldoen niet',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Voorwaarden niet voldaan',
      text: `<p>Uw verzoek bevat voorwaarden waaraan niet voldaan is.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

