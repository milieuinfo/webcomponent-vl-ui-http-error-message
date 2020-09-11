import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-410-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, dit bestaat niet meer',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verzoek bestaat niet meer',
      text: `<p>Uw verzoek lijkt niets op te leveren omdat het niet meer bestaat.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
