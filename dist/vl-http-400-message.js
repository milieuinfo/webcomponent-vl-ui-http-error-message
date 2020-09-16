import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-400-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, dat ging fout',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Verkeerd verzoek',
      text: `Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 400.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
