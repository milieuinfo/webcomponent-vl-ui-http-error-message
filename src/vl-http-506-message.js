import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/src/vl-http-error-message.js';

define('vl-http-506-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, oneindige cirkels',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Oneindige cirkels',
      text: `<p>Uw verzoek veroorzaakt intern oneindige cirkels.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
