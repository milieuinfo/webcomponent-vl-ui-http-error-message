import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-411-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, onvolledig verzoek',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verzoek onvolledig',
      text: `<p>Uw verzoek ontbreekt een content-length header.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

