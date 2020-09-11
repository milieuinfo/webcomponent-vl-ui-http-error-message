import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-413-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, verzoek is te groot',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verzoek te groot',
      text: `<p>Uw verzoek is groter dan de door de server gedefinieerde limiet.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

