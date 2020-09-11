import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-400-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, er is iets misgegaan',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verkeerd verzoek',
      text: `<p>Het verzoek dat u heeft gedaan, is misgegaan door foute syntax.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
