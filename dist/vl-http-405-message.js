import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-405-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, verzoek werd niet toegelaten',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Niet toegelaten',
      text: `<p>Uw verzoek werd niet toegelaten.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
