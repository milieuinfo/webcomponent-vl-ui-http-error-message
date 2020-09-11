import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-401-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, u moet zich eerst aanmelden',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Niet aangemeld',
      text: `<p>Voor het verzoek dat u heeft gedaan moet u aangemeld zijn.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

