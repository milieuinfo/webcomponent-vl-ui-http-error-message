import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-506-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, oneindige interne verwerking',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Oneindige verwerking',
      text: `<p>Uw verzoek veroorzaakt intern een oneindige verwerking.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
